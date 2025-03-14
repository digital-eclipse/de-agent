'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Reusable Counter Component
function Counter({ label, value, onIncrement, onDecrement }: {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) {
  return (
    <div className="flex items-center justify-between w-64 mb-4">
      <button
        onClick={onDecrement}
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
      >
        -
      </button>
      <div className="text-center">
        <p className="text-lg font-semibold text-black">{label}</p>
        <p className="text-xl text-black">{value}</p>
      </div>
      <button
        onClick={onIncrement}
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
      >
        +
      </button>
    </div>
  );
}

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
    if (!isLoggedIn) {
      router.push('/'); // Redirect to the login page if not logged in
    } else {
      setUsername(localStorage.getItem('username')); // Set the username from localStorage
    }
  }, [router]);

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
      console.log('Submitting data:', data); // Log the data being sent
      const response = await fetch('https://script.google.com/macros/s/AKfycbyYDJ9wf2JQvUm63tjrQ4X_O8WE1xLpi_NDG5vxqb6ufi29LKDnBAi5lLH4AuiQGFqe/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      console.log('Response status:', response.status); // Log the response status
      if (response.ok) {
        alert('Data submitted successfully!');
      } else {
        alert('Failed to submit data.');
      }
    } catch (error) {
      console.error('Error submitting data:', error); // Log the error
      alert('An error occurred while submitting data.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF3DF]">
      {/* Welcome Div */}
      <div>
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Dashboard</h1>
        <p className="text-center text-xl font-bold text-black">Welcome, {username}!</p>
      </div>

      {/* Counter Div */}
      <div className="mt-8">
        <Counter
          label="Call 1"
          value={call1}
          onIncrement={() => setCall1(call1 + 1)}
          onDecrement={() => setCall1(call1 - 1)}
        />
        <Counter
          label="Call 2"
          value={call2}
          onIncrement={() => setCall2(call2 + 1)}
          onDecrement={() => setCall2(call2 - 1)}
        />
        <Counter
          label="Call 3"
          value={call3}
          onIncrement={() => setCall3(call3 + 1)}
          onDecrement={() => setCall3(call3 - 1)}
        />
        <Counter
          label="FU"
          value={FU}
          onIncrement={() => setFU(FU + 1)}
          onDecrement={() => setFU(FU - 1)}
        />
        <Counter
          label="Email 1"
          value={email1}
          onIncrement={() => setEmail1(email1 + 1)}
          onDecrement={() => setEmail1(email1 - 1)}
        />
        <Counter
          label="Email 2"
          value={email2}
          onIncrement={() => setEmail2(email2 + 1)}
          onDecrement={() => setEmail2(email2 - 1)}
        />
        <Counter
          label="Email 3"
          value={email3}
          onIncrement={() => setEmail3(email3 + 1)}
          onDecrement={() => setEmail3(email3 - 1)}
        />
        <Counter
          label="Meeting"
          value={meeting}
          onIncrement={() => setMeeting(meeting + 1)}
          onDecrement={() => setMeeting(meeting - 1)}
        />
        <Counter
          label="Declined"
          value={declined}
          onIncrement={() => setDeclined(declined + 1)}
          onDecrement={() => setDeclined(declined - 1)}
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          onClick={submitData}
          className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
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
          className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-[#FFF3DF] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
}