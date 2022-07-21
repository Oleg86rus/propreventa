const checkUpsMock = require('../mock/checkUps.json');
const doctorsMock = require('../mock/doctors.json');
const droppersMock = require('../mock/droppers.json');
const geneticResearchMock = require('../mock/geneticResearch.json');
const CheckUp = require('../models/Checkups');
const Doctor = require('../models/Doctors');
const Droppers = require('../models/Droppers');
const GeneticResearch = require('../models/GeneticResearch');

async function createInitialEntity(Model, data) {
  await Model.collection.drop()
  return Promise.all(
    data.map(async item => {
      try {
        delete item._id
        const newItem = new Model(item)
        await newItem.save()
        return newItem
      } catch (e) {
        return e
      }
    })
  )
}

module.exports = async () => {
  const checkUps = await CheckUp.find()
  if (checkUps.length !== checkUpsMock) {
    await createInitialEntity(CheckUp, checkUpsMock)
  }
  
  const doctors = await Doctor.find()
  if (doctors.length !== doctorsMock) {
    await createInitialEntity(Doctor, doctorsMock)
  }
  
  const droppers = await Droppers.find()
  if (droppers.length !== droppersMock) {
    await createInitialEntity(Droppers, droppersMock)
  }
  
  const geneticResearch = await GeneticResearch.find()
  if (geneticResearch.length !== geneticResearchMock) {
    await createInitialEntity(GeneticResearch, geneticResearchMock)
  }
}