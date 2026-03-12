import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Scissors, DollarSign, Image as ImageIcon, Lock } from "lucide-react";

/*
ZiyahHair Luxury Booking Website
Features:
- Luxury salon landing page
- Service menu
- Booking system with calendar + time slots
- $25 Stripe deposit checkout
- Hair gallery section
- Admin panel to view bookings

To make LIVE:
1. Copy this into a Next.js project
2. Deploy to https://vercel.com
3. Add your Stripe payment link where noted
4. Connect your domain (ex: ziyahhair.com)
*/

export default function ZiyahHairLuxurySite() {
  const services = [
    { name: "Wig Install", price: 150 },
    { name: "Closure Install", price: 130 },
    { name: "Ponytail", price: 80 },
    { name: "Quick Weave", price: 130 },
    { name: "Sew In", price: 175 }
  ];

  const deposit = 25;

  const times = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM"
  ];

  const [service, setService] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [bookings, setBookings] = useState([]);
  const [adminOpen, setAdminOpen] = useState(false);

  function reserveAppointment() {
    if (!service || !date || !time || !name || !email) {
      alert("Please complete all booking fields.");
      return;
    }

    const booking = {
      name,
      email,
      service: service.name,
      date,
      time
    };

    setBookings([...bookings, booking]);

    alert("Redirecting to deposit payment to confirm your appointment.");

    /*
    REPLACE WITH YOUR STRIPE PAYMENT LINK
    */

    window.open("https://buy.stripe.com/test_link", "_blank");
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}

      <div className="text-center py-20 px-6 bg-gradient-to-b from-black to-neutral-900">
        <h1 className="text-6xl font-bold tracking-wide">ZiyahHair</h1>
        <p className="text-neutral-400 mt-4 text-lg">
          Luxury Hair Experience
        </p>

        <Button
          className="mt-8 rounded-2xl text-lg"
          onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })}
        >
          Book Appointment
        </Button>
      </div>


      {/* SERVICES */}

      <div className="max-w-6xl mx-auto p-6">

        <Card className="bg-neutral-900 border-none">
          <CardContent className="p-8">

            <div className="flex items-center gap-3 mb-6">
              <Scissors />
              <h2 className="text-3xl font-semibold">Services</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              {services.map((s) => (
                <div
                  key={s.name}
                  onClick={() => setService(s)}
                  className={`p-5 rounded-2xl cursor-pointer border transition ${
                    service?.name === s.name
                      ? "border-white"
                      : "border-neutral-700"
                  }`}
                >
                  <div className="flex justify-between text-lg">
                    <span>{s.name}</span>
                    <span>${s.price}</span>
                  </div>
                </div>
              ))}

            </div>

          </CardContent>
        </Card>


        {/* GALLERY */}

        <Card className="bg-neutral-900 border-none mt-10">
          <CardContent className="p-8">

            <div className="flex items-center gap-3 mb-6">
              <ImageIcon />
              <h2 className="text-3xl font-semibold">Hair Gallery</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">

              <div className="bg-neutral-800 h-48 rounded-xl" />
              <div className="bg-neutral-800 h-48 rounded-xl" />
              <div className="bg-neutral-800 h-48 rounded-xl" />

            </div>

          </CardContent>
        </Card>


        {/* BOOKING */}

        <Card className="bg-neutral-900 border-none mt-10">
          <CardContent className="p-8 grid gap-5">

            <div className="flex items-center gap-3">
              <CalendarDays />
              <h2 className="text-3xl font-semibold">Book Appointment</h2>
            </div>

            <input
              placeholder="Full Name"
              className="p-3 rounded-xl bg-neutral-800"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Email"
              className="p-3 rounded-xl bg-neutral-800"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="date"
              className="p-3 rounded-xl bg-neutral-800"
              onChange={(e) => setDate(e.target.value)}
            />


            {/* TIME SLOTS */}

            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">

              {times.map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={`p-2 rounded-xl border ${
                    time === t
                      ? "border-white"
                      : "border-neutral-700"
                  }`}
                >
                  {t}
                </button>
              ))}

            </div>


            <div className="flex items-center gap-2 text-neutral-400">
              <DollarSign size={16} />
              $25 deposit required to confirm appointment
            </div>


            <Button
              className="rounded-2xl text-lg"
              onClick={reserveAppointment}
            >
              Pay Deposit & Reserve
            </Button>

          </CardContent>
        </Card>


        {/* ADMIN PANEL */}

        <div className="text-center mt-12">
          <button
            className="text-neutral-500"
            onClick={() => setAdminOpen(!adminOpen)}
          >
            Admin Panel
          </button>
        </div>


        {adminOpen && (

          <Card className="bg-neutral-900 border-none mt-6">
            <CardContent className="p-6">

              <div className="flex items-center gap-2 mb-4">
                <Lock />
                <h2 className="text-xl">Admin Bookings</h2>
              </div>

              {bookings.length === 0 && (
                <p className="text-neutral-400">No bookings yet</p>
              )}

              <div className="grid gap-3">

                {bookings.map((b, i) => (

                  <div
                    key={i}
                    className="border border-neutral-700 p-3 rounded-xl"
                  >

                    <div className="font-semibold">{b.name}</div>

                    <div className="text-sm text-neutral-400">
                      {b.service}
                    </div>

                    <div className="text-sm text-neutral-400">
                      {b.date} • {b.time}
                    </div>

                  </div>

                ))}

              </div>

            </CardContent>
          </Card>

        )}


      </div>


      {/* FOOTER */}

      <div className="text-center text-neutral-500 py-10">
        © {new Date().getFullYear()} ZiyahHair
      </div>


    </div>
  );
}
