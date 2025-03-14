'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  // Counter State
  const [call1, setCall1] = useState(0);
  const [call2, setCall2] = useState(0);
  const [call3, setCall3] = useState(0);
  const [FU, setFU] = useState(0);
  const [email1, setEmail1] = useState(0);
  const [email2, setEmail2] = useState(0);
  const [email3, setEmail3] = useState(0);
  const [meeting, setMeeting] = useState(0);
  const [declined, setDeclined] = useState(0);

  // State for username
  const [username, setUsername] = useState<string | null>(null);

  // Check if the user is logged in (client-side only)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');

    if (!isLoggedIn) {
      router.push('/'); // Redirect to the login page if not logged in
    } else {
      setUsername(storedUsername); // Set the username from localStorage
    }
  }, [router]);

  // Function to submit data to Google Sheets
  const submitData = async () => {
    const data = {
      username,
      call1,
      call2,
      call3,
      FU,
      email1,
      email2,
      email3,
      meeting,
      declined,
    };

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.error) {
        alert(`Error: ${result.error}`);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred while submitting data.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF3DF]">
      {/* Welcome Div */}
      <div>
        {/* <h1 className="text-2xl font-bold mb-6 text-center text-black">Dashboard</h1> */}
        <p className="text-center text-4xl font-bold text-black">Welcome, {username ? username.charAt(0).toUpperCase() + username.slice(1) : 'User'}!</p>
      </div>


{/* Counter Div */}
<div className="mt-8">
  <div className="flex flex-col gap-4">
    {/* Call 1 */}
    <div className="flex items-center justify-between w-64">
      <p className="text-lg font-semibold text-black">Call 1</p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCall1(call1 - 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          -
        </button>
        <p className="text-xl text-black">{call1}</p>
        <button
          onClick={() => setCall1(call1 + 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          +
        </button>
      </div>
    </div>

    {/* Call 2 */}
    <div className="flex items-center justify-between w-64">
      <p className="text-lg font-semibold text-black">Call 2</p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCall2(call2 - 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          -
        </button>
        <p className="text-xl text-black">{call2}</p>
        <button
          onClick={() => setCall2(call2 + 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          +
        </button>
      </div>
    </div>

    {/* Call 3 */}
    <div className="flex items-center justify-between w-64">
      <p className="text-lg font-semibold text-black">Call 3</p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCall3(call3 - 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          -
        </button>
        <p className="text-xl text-black">{call3}</p>
        <button
          onClick={() => setCall3(call3 + 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          +
        </button>
      </div>
    </div>

    {/* FU */}
    <div className="flex items-center justify-between w-64">
      <p className="text-lg font-semibold text-black">FU</p>
      <div className="flex items-center  gap-2">
        <button
          onClick={() => setFU(FU - 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          -
        </button>
        <p className="text-xl text-black">{FU}</p>
        <button
          onClick={() => setFU(FU + 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          +
        </button>
      </div>
    </div>

    {/* Email 1 */}
    <div className="flex items-center justify-between w-64">
      <p className="text-lg font-semibold text-black">Email 1</p>
      <div className="flex  items-center gap-2">
        <button
          onClick={() => setEmail1(email1 - 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          -
        </button>
        <p className="text-xl text-black">{email1}</p>
        <button
          onClick={() => setEmail1(email1 + 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          +
        </button>
      </div>
    </div>

    {/* Email 2 */}
    <div className="flex items-center justify-between w-64">
      <p className="text-lg font-semibold text-black">Email 2</p>
      <div className="flex  items-center gap-2">
        <button
          onClick={() => setEmail2(email2 - 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          -
        </button>
        <p className="text-xl text-black">{email2}</p>
        <button
          onClick={() => setEmail2(email2 + 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          +
        </button>
      </div>
    </div>

    {/* Email 3 */}
    <div className="flex items-center justify-between w-64">
      <p className="text-lg font-semibold text-black">Email 3</p>
      <div className="flex  items-center gap-2">
        <button
          onClick={() => setEmail3(email3 - 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          -
        </button>
        <p className="text-xl text-black">{email3}</p>
        <button
          onClick={() => setEmail3(email3 + 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          +
        </button>
      </div>
    </div>

    {/* Meeting */}
    <div className="flex items-center justify-between w-64">
      <p className="text-lg font-semibold text-black">Meeting</p>
      <div className="flex  items-center gap-2">
        <button
          onClick={() => setMeeting(meeting - 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          -
        </button>
        <p className="text-xl text-black">{meeting}</p>
        <button
          onClick={() => setMeeting(meeting + 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          +
        </button>
      </div>
    </div>

    {/* Declined */}
    <div className="flex items-center justify-between w-64">
      <p className="text-lg font-semibold text-black">Declined</p>
      <div className="flex  items-center gap-2">
        <button
          onClick={() => setDeclined(declined - 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          -
        </button>
        <p className="text-xl text-black">{declined}</p>
        <button
          onClick={() => setDeclined(declined + 1)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          +
        </button>
      </div>
    </div>
  </div>
</div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          onClick={submitData}
          className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Submit Data
        </button>
      </div>

      {/* Logout Button */}
      <div className="mt-8">
        <button
          onClick={() => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            router.push('/');
          }}
          className="w-full mt-4 bg-white text-black py-2 px-4 rounded-md hover:bg-[#FFF3DF] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
}