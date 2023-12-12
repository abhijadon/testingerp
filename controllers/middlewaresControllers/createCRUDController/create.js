const nodemailer = require('nodemailer');

const create = async (Model, req, res) => {
  try {
    // Creating a new document in the collection
    const result = await new Model(req.body).save();

    const { customfields, contact, education } = req.body;
    const institute = customfields ? customfields.institute : null;
    const studentEmail = contact ? contact.email : null;
    const counselorEmail = customfields ? customfields.counselorEmail : null;
    const sendFeeReceipt = customfields ? customfields.sendfeereceipt : null;

    // Set up email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'abhishek@edgetechnosoft.com',
        pass: 'zibs iflm rzwv dmgw',
      },
    });

    let receiverEmail = `${studentEmail},${counselorEmail}`;

    // Define email templates for HES and DES
    const emailTemplates = {
      HES: {
        subject: 'HES - New Document Created',
        html: `<p>This is the HES template for a new document.</p><p>Lead ID: ${req.body.lead_id}</p><p>Full Name: ${req.body.full_name}</p><p>Course: ${education.course}</p><p>Institute: ${education.institute}</p><p>University Name: ${customfields.university_name}</p> ... (add other fields)`,
      },
      DES: {
        subject: 'DES - New Document Created',
        html: `<p>This is the DES template for a new document.</p><p>Lead ID: ${req.body.lead_id}</p><p>Full Name: ${req.body.full_name}</p><p>Course: ${education.course}</p><p>Institute: ${education.institute}</p><p>University Name: ${customfields.university_name}</p> ... (add other fields)`,
      },
    };

    // Check if the institute, sendFeeReceipt, and email templates are specified
    if (
      institute &&
      sendFeeReceipt &&
      sendFeeReceipt.toLowerCase() === 'yes' &&
      emailTemplates[institute]
    ) {
      const mailContent = emailTemplates[institute];
      const mailOptions = {
        from: 'jadonabhishek332@gmail.com',
        to: receiverEmail,
        subject: mailContent.subject,
        html: mailContent.html,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // Return a successful response with document creation details
      return res.status(200).json({
        success: true,
        result,
        message: `Successfully created the document in Model and sent ${institute} email notification`,
      });
    } else {
      // Return a response indicating the email was not sent
      return res.status(200).json({
        success: true,
        result,
        message: `Document created in Model, but ${institute} email notification not sent or sendfeereceipt is not set to 'Yes'`,
      });
    }
  } catch (error) {
    // Handle errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        result: null,
        message: 'Required fields are not supplied',
        error: error,
      });
    } else {
      return res.status(500).json({
        success: false,
        result: null,
        message: error.message,
        error: error,
      });
    }
  }
};

module.exports = create;
