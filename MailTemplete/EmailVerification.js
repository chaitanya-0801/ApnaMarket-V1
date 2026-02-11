const emailVerificationTemplate = (link) => {
  return `<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Email Verification</title>
  <style>
    body {
      background-color: #ffffff;
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.4;
      color: #333333;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }

    .message {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .body {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .cta-button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #FFD60A;
      color: #000000 !important;
      text-decoration: none;
      border-radius: 6px;
      font-size: 16px;
      font-weight: bold;
      margin-top: 20px;
    }

    .support {
      font-size: 14px;
      color: #999999;
      margin-top: 30px;
    }

    .footer-link {
      word-break: break-all;
      font-size: 12px;
      color: #555555;
      margin-top: 15px;
    }
  </style>
</head>

<body>
  <div class="container">

    <div class="message">Verify Your Email Address</div>

    <div class="body">
      <p>Dear User,</p>
      <p>Thank you for registering with <strong>ApnaMarket</strong>.</p>
      <p>Please click the button below to verify your email address:</p>

      <!-- ✅ BUTTON -->
      <a href="${link}" target="_blank" class="cta-button">
        Verify Email
      </a>

      <p style="margin-top:20px;">
        This link is valid for 5 minutes. If you did not request this, you can safely ignore this email.
      </p>
    </div>

    <div class="support">
      If you have any questions, contact us at
      <a href="mailto:info@apnaMarket.com">info@apnaMarket.com</a>
    </div>

    <!-- Backup link -->
    <div class="footer-link">
      If the button doesn’t work, copy and paste this link into your browser:
      <br />
      ${link}
    </div>

  </div>
</body>

</html>`;
};

module.exports = emailVerificationTemplate;
