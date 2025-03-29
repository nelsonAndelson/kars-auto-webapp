# EmailJS Template Structure

This document outlines how to structure your EmailJS template to support multiple form types in your application. The template is designed to work with:

1. General contact forms
2. Auto repair booking forms
3. Vehicle inquiry forms
4. Any future form types

## Template Variables

The template uses a `form_type` parameter to conditionally display different sections:

```
{{form_type}} - Identifies the form source (contact, booking, vehicle_inquiry)
```

### Common Variables (All Forms)

```
{{from_name}} - Name of the person submitting the form
{{from_email}} - Email of the person submitting the form
{{from_phone}} - Phone number of the person submitting the form
{{to_name}} - Recipient name (usually your department/team name)
{{message}} - Generic message field (formatted according to form type)
```

### Booking Form Variables

```
{{booking_service}} - Type of service requested
{{booking_date}} - Preferred appointment date
{{booking_notes}} - Additional notes about the service
```

### Vehicle Inquiry Variables

```
{{car_details}} - Year, make and model of the vehicle
{{car_vin}} - Vehicle identification number
{{car_stock}} - Stock number of the vehicle
{{car_price}} - Price of the vehicle
```

## Recommended Message Formatting

For backward compatibility with existing templates, it's recommended to format the `message` field to include contact details:

### For Booking Forms:
```
Service booking request: [service] on [date]
Contact: [email] | [phone]
Notes: [notes]
```

### For Contact Forms:
```
Contact message from: [name]
Contact: [email] | [phone]

Message:
[message content]
```

### For Vehicle Inquiry Forms:
```
Vehicle inquiry: [car details]
Contact: [email] | [phone]
Message: [message content]
```

This ensures contact information is always visible in the email, even for templates that don't use the specialized sections.

## Recommended Template HTML

Here's how to structure your EmailJS template HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <title>New Message from {{from_name}}</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #f8f8f8; padding: 15px; border-bottom: 3px solid #f57c00; }
    .content { padding: 20px 0; }
    .footer { border-top: 1px solid #eee; padding-top: 15px; font-size: 12px; color: #777; }
    .highlight { color: #f57c00; font-weight: bold; }
    table { width: 100%; border-collapse: collapse; }
    td { padding: 8px; border-bottom: 1px solid #eee; }
    .label { font-weight: bold; width: 120px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New {{#if form_type}} {{form_type}} {{else}} message {{/if}} from {{from_name}}</h2>
    </div>
    
    <div class="content">
      <!-- Contact Information (Common to all forms) -->
      <table>
        <tr>
          <td class="label">Name:</td>
          <td>{{from_name}}</td>
        </tr>
        <tr>
          <td class="label">Email:</td>
          <td>{{from_email}}</td>
        </tr>
        <tr>
          <td class="label">Phone:</td>
          <td>{{from_phone}}</td>
        </tr>
      </table>
      
      <!-- Booking Form Specific Section -->
      {{#if booking_service}}
      <div style="margin-top: 25px; background-color: #fff9e6; padding: 15px; border-left: 4px solid #f57c00;">
        <h3>Service Booking Details</h3>
        <table>
          <tr>
            <td class="label">Service:</td>
            <td class="highlight">{{booking_service}}</td>
          </tr>
          <tr>
            <td class="label">Date:</td>
            <td>{{booking_date}}</td>
          </tr>
          {{#if booking_notes}}
          <tr>
            <td class="label">Notes:</td>
            <td>{{booking_notes}}</td>
          </tr>
          {{/if}}
        </table>
      </div>
      {{/if}}
      
      <!-- Vehicle Inquiry Specific Section -->
      {{#if car_details}}
      <div style="margin-top: 25px; background-color: #e6f7ff; padding: 15px; border-left: 4px solid #0077cc;">
        <h3>Vehicle Inquiry Details</h3>
        <table>
          <tr>
            <td class="label">Vehicle:</td>
            <td class="highlight">{{car_details}}</td>
          </tr>
          {{#if car_price}}
          <tr>
            <td class="label">Price:</td>
            <td>{{car_price}}</td>
          </tr>
          {{/if}}
          {{#if car_stock}}
          <tr>
            <td class="label">Stock #:</td>
            <td>{{car_stock}}</td>
          </tr>
          {{/if}}
          {{#if car_vin}}
          <tr>
            <td class="label">VIN:</td>
            <td>{{car_vin}}</td>
          </tr>
          {{/if}}
        </table>
      </div>
      {{/if}}
      
      <!-- Generic Message Section -->
      {{#if message}}
      <div style="margin-top: 25px; padding: 15px; border-left: 4px solid #ddd;">
        <h3>Message</h3>
        <pre style="font-family: inherit; white-space: pre-wrap;">{{message}}</pre>
      </div>
      {{/if}}
    </div>
    
    <div class="footer">
      <p>This email was sent from the Kars Auto Sales and Repair website.</p>
    </div>
  </div>
</body>
</html>
```

## How to Update Your EmailJS Template

1. Log in to your EmailJS account
2. Go to the Email Templates section
3. Edit your existing template (template_1lo3fxd)
4. Replace the HTML content with the structure above
5. Test the template by sending a test email using different form_type values

## Usage in Code

When sending emails from different forms, use the `form_type` parameter to indicate the source:

```javascript
// For booking form
const detailedMessage = `
Service booking request: ${formData.service} on ${formData.date}
Contact: ${formData.email} | ${formData.phone}
Notes: ${formData.notes || 'No additional notes'}
`.trim();

emailjs.send('service_v6268tk', 'template_1lo3fxd', {
  form_type: 'booking',
  to_name: 'Kars Auto Service Team',
  from_name: formData.name,
  from_email: formData.email,
  from_phone: formData.phone,
  booking_service: formData.service,
  booking_date: formData.date,
  booking_notes: formData.notes,
  message: detailedMessage
});

// For contact form
const detailedMessage = `
Contact message from: ${formData.name}
Contact: ${formData.email} | ${formData.phone}

Message:
${formData.message}
`.trim();

emailjs.send('service_v6268tk', 'template_1lo3fxd', {
  form_type: 'contact',
  to_name: 'Kars Auto Team',
  from_name: formData.name,
  from_email: formData.email,
  from_phone: formData.phone,
  message: detailedMessage
});
``` 