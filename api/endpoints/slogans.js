const express = require('express');
const uuidv4 = require('uuid/v4');

const sloganSchema = require('../schema/sloganSchema.json');
const ExpressError = require('../errors/expressError');
const jsonHelper = require('../helpers');
let slogans = require('../data/defaultSlogans.json');

const router = new express.Router();
const DEFAULT_DATA_PATH = `api/data/defaultSlogans.json`;

/**
 * These functions do not need to be asynchronous for this usecase,
 * using fs.writeFileSync to ensure synchronous file writing.
 */

/**
 * Route to retrieve all the slogans from defaultItems.json.
 * Does not need to be asynchronous for this usecase.
 * offset and limit in query string
 * GET / =>
 *     /api/slogans?offset=0&limit=10
 */

router.get('/', (req, res, next) => {
  try {
    const { offset, limit } = req.query;
    const response = slogans.slice(+offset, +offset + +limit);
    return res.json({ total: slogans.length, slogans: response });
  } catch (error) {
    return next(error);
  }
});

/**
 * jsonschema used to ensure data sent is of right format.
 * create unique id for slogan and prepend to array.
 *
 *  POST / =>
 *    {slogan: {
 *        text: "transition ubiquitous methodologies"
 *      }
 *    }
 */

router.post('/', (req, res, next) => {
  try {
    const { slogan } = req.body;
    jsonHelper.validate(slogan, sloganSchema);
    slogan.id = uuidv4();
    slogans = [slogan, ...slogans];
    jsonHelper.write(DEFAULT_DATA_PATH, JSON.stringify(slogans, null, 2));
    return res
      .status(201)
      .json({ message: 'Slogan successfully created', slogan });
  } catch (error) {
    return next(error);
  }
});

/**
 * Validate the request body, check that the target ID exists
 * update slogans in memory, write updated slogans to JSON file
 *
 *  PUT / =>
 *    {slogan:
 *      {
 *        "id": "acd3721c-1908-4943-856c-8e049d2ac0a3",
 *        "text": "changed slogan text"
 *      }
 *    }
 */

router.put('/', (req, res, next) => {
  try {
    const { slogan } = req.body;
    jsonHelper.validate(slogan, sloganSchema);

    const { id, text } = slogan;
    if (!slogans.some(sloganObj => sloganObj.id === id))
      throw new ExpressError('No slogan with that ID exists', 404);
    slogans = slogans.map(sloganObj =>
      sloganObj.id === id ? { ...sloganObj, text } : sloganObj,
    );
    jsonHelper.write(DEFAULT_DATA_PATH, JSON.stringify(slogans, null, 2));
    return res
      .status(200)
      .json({ message: 'Slogan successfully updated', slogan });
  } catch (error) {
    return next(error);
  }
});

/**
 * First validate slogan id provided
 * Separate the slogan to be deleted from the rest,
 * and return that slogan on success
 *
 *  DELETE / =>
 *    {id: "acd3721c-1908-4943-856c-8e049d2ac0a3"}
 */

router.delete('/', (req, res, next) => {
  try {
    const { id } = req.body;
    if (!slogans.some(slogan => slogan.id === id))
      throw new ExpressError('No slogan with that ID exists', 404);

    // separate the deleted slogan from the array
    const reducedSlogans = slogans.reduce(
      (acc, slogan) => {
        if (slogan.id === id) {
          acc.deleted = slogan;
        } else {
          acc.filtered.push(slogan);
        }
        return acc;
      },
      {
        filtered: [],
        deleted: {},
      },
    );
    slogans = reducedSlogans.filtered;
    jsonHelper.write(DEFAULT_DATA_PATH, JSON.stringify(slogans, null, 2));
    return res.status(200).json({
      message: 'Slogan successfully deleted',
      slogan: reducedSlogans.deleted,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
