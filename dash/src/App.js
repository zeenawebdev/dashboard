import Sidebar from "./global/Sidebar";
import React ,{ useState }  from 'react';
import Topbar from "./global/Topbar";
import { ColorModeContext , useMode } from "./theme";
import { CssBaseline , ThemeProvider } from "@mui/material";
import Dashboard from "./scene/dashboard";
import { Routes , Route } from "react-router-dom";
import Team from "./scene/team";
import Contacts from "./scene/contacts";
import Invoices from "./scene/invoices";
import Form from "./scene/form";
import Calendar from "./scene/calendar";
import FAQ from "./scene/faq";
import Bar from "./scene/bar";
import Pie from "./scene/pie";
import Line from "./scene/line";
import Geography from "./scene/map";

function App() {

  const [theme , colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true);
  return (

    <ColorModeContext.Provider value={colorMode}>
<ThemeProvider theme={theme}>
<CssBaseline />
    <div className="app">
    <Sidebar isSidebar={isSidebar} />
       
           
<main className="content"> 
  <Topbar setIsSidebar={setIsSidebar} />
 
  <Routes>
              <Route path="/" element={<Dashboard />} />
             <Route path="/team" element={<Team />} />
               <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />  
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
            <Route path="/faq" element={<FAQ />} /> 
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
               <Route path="/geography" element={<Geography />} />  
            </Routes>
   
</main>
  
    </div>
    </ThemeProvider>
     </ColorModeContext.Provider>
  );
}

export default App;
