  import Contact from "../models/contact.models.js";
import { sendMail } from "../utils/sendMail.js";

/* ---------------- HTML Escape ---------------- */
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

  /* ================= ADMIN EMAIL ================= */

const adminHtml = (c) => `
<div style="
  font-family:Arial,Helvetica,sans-serif;
  background:#f4f7fb;
  padding:40px 20px;
">

  <div style="
    max-width:620px;
    margin:auto;
    background:#ffffff;
    border-radius:10px;
    border:1px solid #e5e7eb;
    overflow:hidden;
  ">


    <!-- HEADER -->
    <div style="
      background:#111827;
      padding:20px 25px;
    ">

      <h2 style="
        color:#ffffff;
        margin:0;
        font-weight:600;
        letter-spacing:0.5px;
      ">
        Ninebyt Software Solutions
      </h2>

      <p style="
        color:#9ca3af;
        font-size:13px;
        margin-top:5px;
        margin-bottom:0;
      ">
        New Client Enquiry Notification
      </p>

    </div>



    <!-- BODY -->
    <div style="padding:25px;">


      <h3 style="
        margin-top:0;
        color:#2563eb;
      ">
        Client Details
      </h3>


      <table style="
        width:100%;
        font-size:14px;
        line-height:1.8;
        color:#111827;
      ">

        <tr>
          <td style="width:130px;"><b>Name</b></td>
          <td>${escapeHtml(c.firstName)} ${escapeHtml(c.lastName)}</td>
        </tr>

        <tr>
          <td><b>Email</b></td>
          <td>${escapeHtml(c.email)}</td>
        </tr>

        <tr>
          <td><b>Phone</b></td>
          <td>${escapeHtml(c.phone)}</td>
        </tr>

      </table>



      <!-- MESSAGE -->
      <div style="margin-top:25px;">

        <h3 style="
          margin-bottom:10px;
          color:#2563eb;
        ">
          Project Message
        </h3>

        <div style="
          background:#f9fafb;
          border:1px solid #e5e7eb;
          padding:15px;
          border-radius:6px;
          font-size:14px;
          color:#374151;
        ">

          ${escapeHtml(c.message)}

        </div>

      </div>



      <!-- TECH INFO -->
      <div style="
        margin-top:25px;
        font-size:12px;
        color:#6b7280;
      ">

        <b>Technical Information</b><br/>

        IP Address: ${escapeHtml(c.ipAddress || "Unknown")}<br/>

        Browser: ${escapeHtml(c.userAgent || "Unknown")}

      </div>


    </div>



    <!-- FOOTER -->
    <div style="
      background:#f9fafb;
      padding:20px 25px;
      font-size:13px;
      color:#374151;
      border-top:1px solid #e5e7eb;
    ">

      <b>Ninebyt Software Solutions</b><br/>

      Custom Software, Websites and Digital Solutions<br/>

      Email: team9byt@gmail.com

    </div>


  </div>

</div>
`;



/* ================= USER EMAIL ================= */

 const userHtml = (c) => `
<div style="
  font-family:Arial,Helvetica,sans-serif;
  background:#f4f7fb;
  padding:40px 20px;
">

  <div style="
    max-width:620px;
    margin:auto;
    background:#ffffff;
    border-radius:10px;
    border:1px solid #e5e7eb;
    overflow:hidden;
  ">


    <!-- HEADER -->
    <div style="
      background:#111827;
      padding:20px 25px;
    ">

      <h2 style="
        color:#ffffff;
        margin:0;
        font-weight:600;
      ">
        Ninebyt Software Solutions
      </h2>

      <p style="
        color:#9ca3af;
        font-size:13px;
        margin-top:5px;
        margin-bottom:0;
      ">
        We've received your enquiry
      </p>

    </div>



    <!-- BODY -->
    <div style="padding:25px;">


      <h3 style="
        color:#2563eb;
        margin-top:0;
      ">
        Thank you for contacting us
      </h3>


      <p style="font-size:14px;color:#374151;">
        Hello <b>${escapeHtml(c.firstName)}</b>,
      </p>


      <p style="font-size:14px;color:#374151;line-height:1.6;">

        We have successfully received your message.

        <br/><br/>

        Our team will carefully review your requirements and get back to you within 24 hours.

        <br/><br/>

        We look forward to helping you build and grow your business with our software solutions.

      </p>



      <!-- MESSAGE COPY -->
      <div style="margin-top:25px;">

        <p style="
          font-size:14px;
          margin-bottom:8px;
          font-weight:600;
          color:#111827;
        ">
          Your Message:
        </p>


        <div style="
          background:#f9fafb;
          border:1px solid #e5e7eb;
          padding:15px;
          border-radius:6px;
          font-size:14px;
          color:#374151;
        ">

          ${escapeHtml(c.message)}

        </div>

      </div>



      <!-- SIGNATURE -->
      <div style="
        margin-top:30px;
        font-size:14px;
        color:#374151;
      ">

        Best regards,<br/><br/>

        <b>Ninebyt Software Solutions</b><br/>

        Custom Software & Website Development<br/>

        team9byt@gmail.com

      </div>


    </div>



    <!-- FOOTER -->
    <div style="
      background:#f9fafb;
      padding:15px 25px;
      font-size:12px;
      color:#6b7280;
      border-top:1px solid #e5e7eb;
      text-align:center;
    ">

      This is an automated message confirming your enquiry.

    </div>


  </div>

</div>
`;



/* ------------------------------------------------ */
/* CREATE CONTACT (PUBLIC)                          */
/* ------------------------------------------------ */
export const createContact = (req, res) => {
  // ✅ instant response (UX friendly)
  res.status(202).json({
    ok: true,
    message: "Message received. We will contact you shortly.",
  });

  // ✅ background processing
  setImmediate(async () => {
    try {
      const { firstName, lastName, email, phone, message } = req.body;

      // ✅ model-level required fields validation
      if (!firstName || !lastName || !email || !phone || !message) {
        console.warn("⚠️ Contact skipped: missing required fields");
        return;
      }

      const contact = await Contact.create({
        firstName,
        lastName,
        email,
        phone,
        message,
        source: "Contact Page",
        status: "new", // ✅ matches model enum
        ipAddress: req.ip,
        userAgent: req.headers["user-agent"],
      });

      // ✅ notify admin
      await sendMail({
        to: process.env.ADMIN_EMAIL,
        subject: "New Contact Message",
        html: adminHtml(contact),
        replyTo: contact.email,
      });

      // ✅ confirmation to user
      await sendMail({
        to: contact.email,
        subject: "We received your message",
        html: userHtml(contact),
      });

    } catch (err) {
      console.error("❌ Background contact error:", err);
    }
  });
};

/* ------------------------------------------------ */
/* GET ALL CONTACTS (ADMIN)                         */
/* ------------------------------------------------ */
export const getAllContacts = async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ ok: true, contacts });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* GET CONTACT BY ID (ADMIN)                        */
/* ------------------------------------------------ */
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }
    res.json({ ok: true, contact });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* UPDATE CONTACT STATUS (ADMIN)                    */
/* ------------------------------------------------ */
export const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;

    // ✅ matches model enum exactly
    const allowedStatus = ["new", "replied", "closed"];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        ok: false,
        message: "Invalid status value",
      });
    }

    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }

    res.json({ ok: true, contact: updated });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* DELETE CONTACT (ADMIN)                           */
/* ------------------------------------------------ */
export const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }
    res.json({ ok: true, message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};
