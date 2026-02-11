const emailVerifiedTemplate = (name, loginLink) => {
  return `<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Email Verified</title>
  <style>
    body {
      background-color: #f4f6f8;
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      color: #333333;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    }

    .success-icon {
      font-size: 50px;
      color: #28a745;
      margin-bottom: 20px;
    }

    .message {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #28a745;
    }

    .body-text {
      margin-bottom: 25px;
    }

    .cta-button {
      display: inline-block;
      padding: 12px 25px;
      background-color: #28a745;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 6px;
      font-size: 16px;
      font-weight: bold;
    }

    .support {
      font-size: 14px;
      color: #777777;
      margin-top: 30px;
    }
  </style>
</head>

<body>
  <div class="container">

    <div class="success-icon">✔️</div>

    <div class="message">Email Verified Successfully!</div>

    <div class="body-text">
      <p>Hi ${name || "User"},</p>
      <p>Your email has been successfully verified.</p>
      <p>You can now access all features of <strong>ApnaMarket</strong>.</p>
    </div>

    <a href="${loginLink}" target="_blank" class="cta-button">
      Login to Your Account
    </a>

    <div class="support">
      If you did not perform this action, please contact our support team immediately.
    </div>

  </div>
</body>

</html>`;
};

module.exports = emailVerifiedTemplate;
