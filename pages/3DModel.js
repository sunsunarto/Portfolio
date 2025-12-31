import { useContext } from 'react'
import dynamic from 'next/dynamic'
import { Divider, Typography } from 'antd'
import LayoutApp from '../components/LayoutApp.js'
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";

const { Title } = Typography


const ModelViewer = dynamic(() => import('../components/3DModelCard.js') )

export default function Model3DPage() {
const { language } = useContext(LanguageContext);
const t = translations[language];
    
  return (
    <LayoutApp>
      <Divider/>
      <Title level={2} style={{color: '#000080'}}>{t.nav3DModel}</Title>
      <div style={{ width: '100%', height: '500px' }}>
        <ModelViewer />
      </div>
    </LayoutApp>
  )
}
