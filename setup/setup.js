const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '..', '.env') });
dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Adjust the timeout value as needed
  })
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

mongoose.Promise = global.Promise;

async function setupApp() {
  try {
    const Admin = require('../models/coreModels/Admin');
    const newAdmin = new Admin();
    const passwordHash = newAdmin.generateHash('Abhishek12345');

    await new Admin({
      email: 'jadonabhishek332@gmail.com',
      password: passwordHash,
      name: 'Abhishek',
      surname: 'Jadon',
      role: 'admin',
    }).save();

    console.log('👍 Admin created : Done!');

    const Setting = require('../models/coreModels/Setting');
    const Email = require('../models/coreModels/Email');

    const readJsonFile = (filename) => {
      const filePath = path.join(__dirname, 'config', `${filename}.json`);
      try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContent);
      } catch (error) {
        console.error(`Error reading ${filename}.json file:`, error);
        process.exit(1);
      }
    };

    const [appConfig, companyConfig, financeConfig, crmConfig, moneyFormatConfig, customConfig] = [
      'appConfig',
      'companyConfig',
      'financeConfig',
      'crmConfig',
      'moneyFormatConfig',
      'customConfig',
    ].map(readJsonFile);

    await Promise.all([
      Setting.insertMany([
        ...appConfig,
        ...companyConfig,
        ...financeConfig,
        ...crmConfig,
        ...moneyFormatConfig,
        ...customConfig,
      ]),
      Email.insertMany([...readJsonFile('emailTemplate')]),
    ]);

    console.log('👍 Settings created : Done!');
    console.log('👍 Email Templates Created : Done!');
    console.log('🥳 Setup completed: Success!');
    process.exit();
  } catch (e) {
    console.log('\n🚫 Error! The Error info is below');
    console.error(e);
    process.exit(1);
  }
}

setupApp();
