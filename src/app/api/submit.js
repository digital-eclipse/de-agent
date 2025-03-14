export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyu02B3_U5jYhvQp0QR_ZqityUr3VeJpIN4BpdaSZaRvxSl-5mytqQjAHFNONgNNHVT/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.text(); // Get the response as text

      try {
        const jsonResult = JSON.parse(result); // Try to parse it as JSON
        if (response.ok) {
          res.status(200).json(jsonResult);
        } else {
          res.status(500).json({ error: 'Failed to submit data', details: jsonResult });
        }
      } catch (error) {
        // If parsing fails, return the raw response
        res.status(500).json({ error: 'Invalid JSON response', rawResponse: result });
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      res.status(500).json({ error: 'An error occurred while submitting data.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}