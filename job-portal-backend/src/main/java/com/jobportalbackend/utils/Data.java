package com.jobportalbackend.utils;

public class Data {
    public static String getOtpEmailTemplate(String otpCode) {
        String htmlTemplate = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Your One-Time Password (OTP)</title>
        <style>
            body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
            table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
            img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
            table { border-collapse: collapse !important; }
            body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
            @media screen and (max-width: 600px) {
                .email-container { width: 100% !important; padding: 10px !important; }
                .otp-code { letter-spacing: 4px !important; font-size: 28px !important; padding: 14px 20px !important; }
            }
        </style>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f6f8;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #f4f6f8;">
            <tr>
                <td align="center" style="padding: 40px 10px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="550" class="email-container" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden; border: 1px solid #e1e4e8;">
                        <tr>
                            <td align="center" style="padding: 32px 40px 20px 40px; background-color: #ffffff; border-bottom: 1px solid #f0f2f5;">
                                <img src="https://via.placeholder.com/150x40?text=YOUR+LOGO" alt="Company Logo" width="150" height="40" style="display: block; color: #1a1a1a; font-weight: bold; font-size: 22px;">
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 40px 40px 32px 40px;">
                                <h1 style="margin: 0 0 16px 0; font-size: 22px; line-height: 30px; color: #111827; font-weight: 700;">Verify your identity</h1>
                                <p style="margin: 0 0 24px 0; font-size: 15px; line-height: 24px; color: #4b5563;">Hello,</p>
                                <p style="margin: 0 0 24px 0; font-size: 15px; line-height: 24px; color: #4b5563;">We received a request to access your account. Use the following One-Time Password (OTP) to complete your verification process. This code is strictly valid for the next <b>10 minutes</b>.</p>
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 24px;">
                                    <tr>
                                        <td align="center">
                                            <div class="otp-code" style="display: inline-block; background-color: #f3f4f6; border: 2px dashed #cbd5e1; border-radius: 8px; padding: 16px 32px; font-size: 32px; font-weight: 700; color: #1d4ed8; letter-spacing: 6px; text-align: center;">
                                                %s
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 22px; color: #ef4444; font-weight: 500;">⚠️ If you did not request this code, please secure your account immediately or contact support. Do not share this code with anyone.</p>
                                <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 32px 0 24px 0;">
                                <p style="margin: 0; font-size: 13px; line-height: 20px; color: #6b7280;">Regards,<br><strong>The Security Team</strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0 40px 40px 40px; background-color: #ffffff;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td align="center" style="font-size: 12px; line-height: 18px; color: #9ca3af; text-align: center;">
                                            <p style="margin: 0 0 8px 0;">You received this email because an action was triggered on your account.</p>
                                            <p style="margin: 0 0 16px 0;">© 2026 YourCompany Inc. | 123 Tech Avenue, Suite 400, San Francisco, CA 94107</p>
                                            <p style="margin: 0;"><a href="https://yourwebsite.com/privacy" target="_blank" style="color: #3b82f6; text-decoration: underline;">Privacy Policy</a> &nbsp;|&nbsp; <a href="https://yourwebsite.com/support" target="_blank" style="color: #3b82f6; text-decoration: underline;">Support Center</a></p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    """;

        return String.format(htmlTemplate, otpCode);
    }
}
