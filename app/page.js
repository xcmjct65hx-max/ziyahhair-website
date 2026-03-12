export default function Home() {
  return (
    <main style={{fontFamily:"sans-serif",padding:"40px",textAlign:"center"}}>
      <h1>ZiyahHair</h1>
      <p>Luxury Hair Appointments</p>

      <h2>Services</h2>
      <ul style={{listStyle:"none",padding:0}}>
        <li>Wig Install — $150</li>
        <li>Closure Install — $130</li>
        <li>Ponytail — $80</li>
        <li>Quick Weave — $130</li>
        <li>Sew In — $175</li>
      </ul>

      <p>$25 Deposit Required To Book</p>

      <button style={{
        padding:"15px 25px",
        fontSize:"16px",
        borderRadius:"10px",
        border:"none",
        background:"black",
        color:"white"
      }}>
        Book Appointment
      </button>
    </main>
  )
}
