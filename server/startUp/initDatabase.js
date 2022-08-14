const checkUpsMock = require('../mock/checkUps.json');
const doctorsMock = require('../mock/doctors.json');
const droppersMock = require('../mock/IVTherapyes.json');
const geneticResearchMock = require('../mock/geneticResearch.json');
const ultrasoundsMock = require('../mock/ultrasounds.json');
const usersMock = require('../mock/users.json');
const promoMock = require('../mock/promo.json');
const CheckUp = require('../models/Checkups');
const Doctor = require('../models/Doctors');
const Droppers = require('../models/IVTherapyes');
const GeneticResearch = require('../models/GeneticResearch');
const Ultrasounds = require('../models/Ultrasounds');
const Users = require('../models/User');
const Promo = require('../models/Promo');

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
  if (checkUps.length !== checkUpsMock.length) {
    await createInitialEntity(CheckUp, checkUpsMock)
  }
  
  const doctors = await Doctor.find()
  if (doctors.length !== doctorsMock.length) {
    await createInitialEntity(Doctor, doctorsMock)
  }
  
  const droppers = await Droppers.find()
  if (droppers.length !== droppersMock.length) {
    await createInitialEntity(Droppers, droppersMock)
  }
  
  const geneticResearch = await GeneticResearch.find()
  if (geneticResearch.length !== geneticResearchMock.length) {
    await createInitialEntity(GeneticResearch, geneticResearchMock)
  }
  
  const ultrasounds = await Ultrasounds.find()
  if (ultrasounds.length !== ultrasoundsMock.length) {
    await createInitialEntity(Ultrasounds, ultrasoundsMock)
  }
  
  const users = await Users.find()
  if (users.length !== usersMock.length) {
    await createInitialEntity(Users, usersMock)
  }
  
  const promo = await Promo.find()
  if (promo.length !== promoMock.length) {
    await createInitialEntity(Promo, promoMock)
  }
}