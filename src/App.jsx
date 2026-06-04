
import { Routes, Route, Link } from 'react-router-dom'

const Frame = ({src}) => (
  <iframe src={src} style={{width:'100%',height:'100vh',border:'none'}} />
)

export default function App(){
 return (
  <Routes>
   <Route path="/" element={
    <div style={{padding:40,fontFamily:'Arial'}}>
      <h1>LexTax Suite</h1>
      <p>Select a module:</p>
      <ul>
        <li><Link to="/crm">CRM Professional</Link></li>
        <li><Link to="/whatsapp">WhatsApp Notifications</Link></li>
      </ul>
    </div>
   }/>
   <Route path="/crm" element={<Frame src="/crm.html" />} />
   <Route path="/whatsapp" element={<Frame src="/whatsapp.html" />} />
  </Routes>
 )
}
