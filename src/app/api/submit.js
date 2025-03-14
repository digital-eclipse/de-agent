export default async function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body;
  
      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbwSRXgppyXkpZozT5mzAWC-znucUkllzupTBpTXtDsTjegzYtMCt-r0a_PdPt_uLKFA/exec',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        );
  
        if (response.ok) {
          res.status(200).json({ message: 'Data submitted successfully!' });
        } else {
          res.status(500).json({ message: 'Failed to submit data.' });
        }
      } catch (error) {
        console.error('Error submitting data:', error);
        res.status(500).json({ message: 'An error occurred while submitting data.' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed.' });
    }
  }