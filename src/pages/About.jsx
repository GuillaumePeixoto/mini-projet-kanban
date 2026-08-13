import avatar from '../assets/images/avatar.png'

function About() {


    return (
        <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center', }}>
            <h2 style={{marginBottom :'50px', fontSize : '2.5rem'}}>About</h2>
            <div style={{display : 'flex' , gap : '50px', justifyContent :'center'}}>
                <div className="card-presentation">
                <img src={avatar} alt="" />
                <h3>Guillaume Peixoto</h3>
                <p>Description :</p>
                
            </div>
            <div className="card-presentation">
                <img src={avatar} alt="" />
                <h3>Emmanuel Lethiec</h3>
                <p>Description :</p>
                
            </div>
            </div>
            
        </div>
        
        
    )
}

export default About;
