<form method="POST" action="/.netlify/functions/contact">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message } = JSON.parse(event.body);

  // Send email via Netlify's native form handling or your email service
  console.log(`New form submission: ${name} (${email})`);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form received!" }),
  };
};