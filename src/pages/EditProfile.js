import React from 'react'

function EditProfile() {
  return (
    <div className="Edit-profile">
        {/* Bale naiisip ko rito kung ano yung ininput niya na details is mababago yung details na nasa homepage
            parang ganon din sa ginawa mo dati may nadagdag lang. Yung socials na mga input sa baba yun na yung gagamitin nating
            href na ei-include sa footer nila. Naiisip ko pag bago pa lang yung user blank pa lang yung homepage? or lalagay tayong
            default details na pang basketbliss? ikaw bahala kung san ka mas madadalian
        
        */}


        <h1>Business Details</h1>
        <input type="text" placeholder="Enter your business name"/>
        <input type="text" placeholder="Enter your comapny's Tagline"/>
        <input type="number" placeholder="Enter your company's contact number" />
        <input type="email" placeholder="Enter your company's email address" />

        <h1>Socials</h1>
        <input type="text" placeholder="Enter your company's Facebook link" />
        <input type="text" placeholder="Enter your company's Instagram link" />
        <input type="text" placeholder="Enter your company's Tiktok link" />

        <button>Save</button>

        
    </div>
  )
}

export default EditProfile
