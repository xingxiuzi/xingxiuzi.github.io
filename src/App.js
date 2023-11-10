import './App.css';
import iconLink from './images/external-link.png'
import ascend from './images/ascend.png'
import kunpeng from './images/kunpeng.png'
import ninjable from './images/ninjable.png'


function App() {
  return (
    <div className="App px-8 font-mono">
      <Header></Header>
      <Introducing></Introducing>
      <TechStack></TechStack>
      <About></About>
      <Project></Project>
      <ContactMe></ContactMe>
    </div>
  );
}

function Header(){
  return(
    <div className='h-16 flex justify-between text-xl'>
      <div className='items-center flex hover:font-extrabold cursor'>Yuzhi.Dev</div>
      <ul className='menuList flex flex-row-reverse h-full items-center'>
        <li className='hover:font-semibold'><a href='#projectList'>Contact</a></li>
        <li className='mr-4 hover:font-semibold'><a href='#projectList'>Projects</a></li>
        <li className='mr-4 hover:font-semibold'><a href='#projectList'>About</a></li>
        <li className="flex justify-center mr-4 hover:font-semibold"><a href='#javascript'>Home</a></li>
      </ul>
    </div>
  ) 
}


function Project(){
  let projectList = [
    {
      coverImg:kunpeng,
      url:'http://www.hikunpeng.com/en',
      title:'Hi Kunpeng',
      description:'The Kunpeng community website of Huawei is a platform for users to share and discuss Kunpeng-related information, including news, technical documents, case studies, and best practices.',
      techAry:['Vue','Less']
    },
    {
      coverImg:ascend,
      url:'http://www.hiascend.com/en',
      title:'Hi Ascend',
      description:'Ascend is a community website for Huawei, providing information and resources for users to develop AI applications.',
      techAry:['Vue','Less']

    },
    {
      coverImg:ninjable,
      url:'https://yur4ik1.github.io/html/ninjable-portal/skills.html',
      title:'Ninjable',
      description:'Ninjable is a ninja game theme programmer learning website, where you can strengthen your "ninja" by learning development skills.',
      techAry:['HTML + CSS','GraphQL']

    }
  ]
  return(
      <div className='mt-72 flex justify-center'>
        <div className='basis-2/3 '>
          <p className='text-start basis-2/3 text-sky-600 font-semibold'>PROTFOLIO</p>
          <p className='text-start basis-2/3 text-black font-black text-lg'>Each projects is a unique piece of development</p>
          <ul className="projectList" id="projectList">
          {projectList.map((item,index)=>{
            if(index%2 === 0){
              return(
                <li key={index} className='flex  mt-16'>
                  <img src='' alt='' className='basis-2/3 overflow-hiden rounded-3xl shadow-xl bg-cover bg-top max-h-96' style={{backgroundImage:`url(${item.coverImg})`}}/>
                  <div className='basis-1/3 ml-12 pt-12'>
                    <div className='text-black font-black text-lg text-center'>{item.title}</div>
                    <div className='mt-8 text-center'>{item.description}</div>
                    <div className='mt-8 text-center'><RenderTech techAry={item.techAry} /></div>
                    <a href={item.url} className='flex items-center justify-center hover:text-sky-600 mt-8'>
                      Live Demo
                      <img src={iconLink} alt='' className='w-4 h-4 ml-2'/>
                    </a>
                  </div>
                </li>
            )
            }else{
              return(
                <li key={index} className='flex  mt-16'>
                  <div className='basis-1/3 mr-12 pt-12'>
                    <div className='text-black font-black text-lg text-center'>{item.title}</div>
                    <div className='mt-8 text-center'>{item.description}</div>
                    <div className='mt-8 text-center'><RenderTech techAry={item.techAry} /></div>
                    <a href={item.url} className='flex items-center justify-center hover:text-sky-600 mt-8'>
                      Live Demo
                      <img src={iconLink} alt='' className='w-4 h-4 ml-2'/>
                    </a>
                  </div>
                  <img src='' alt='' className='basis-2/3 overflow-hiden rounded-3xl shadow-xl bg-cover bg-top max-h-96' style={{backgroundImage:`url(${item.coverImg})`}}/>
                </li>
            )
            }
          })}
          </ul>
        </div>
      </div>
  )
}

function RenderTech(props){
  return( props.techAry.map((item,index)=>{
    if(index === props.techAry.length-1){
      return <span className='text-black font-black text-lg text-center'>{item}</span>
    }else{
      return <span className='mr-12 text-black font-black text-lg text-center'>{item}</span>
    }
  })
  )
}

function About(){
  return(
    <div className='mt-72 flex justify-center'>
      <div className='basis-2/3 flex'>
        <div className='basis-2/5 workTable h-60 bg-cover bg-center rounded-lg relative'>
          <Animation></Animation>
        </div>
        <div className='basis-3/5 ml-16'>
          <div className='text-sky-600 font-semibold'>ABOUT ME</div>
          <div className='text-black font-black text-lg'>A dedicated Front-end Developer based in China,Chengdu.</div>
          <div className='text-sm mt-4'>As a Front-end Developer,I possess an impressive arsenal of skills in HTML,CSS,JavaScript,React,Vue,Tailwind,and SCSS.I excel in designing and maintaining responsive websites that offer a smooth user experience.My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</div>
        </div>
      </div>
    </div>
  )
}

function Introducing(){
  return(
    <div className='mt-36 flex justify-center'>
      <div className='basis-1/3 pt-8'>
        <p className='text-4xl font-semibold'>Front-end Developer</p>
        <span>Hi,I'm Yuzhi Qing. A passionate Front-end Developer based in China,Chengdu.</span>
      </div>
      <div className='basis-1/3'>
        <div className='shadow-xl h-60 w-60 rounded-full outline outline-offset-2 outline-4 outline-cyan-500 mx-auto avatar'></div>
      </div>
    </div>
  )
}

function TechStack(){
  return(
    <div className='flex justify-center mt-32'>
      <div className='basis-2/3 flex justify-start	items-center'>
        <span className='font-semibold'>Tech Stack |</span>
        <img src='https://r.huaweistatic.com/s/ascendstatic/lst/as/doc/pc/img_doc_2210211.png' alt='' className='w-8 h-8 ml-24'/>
        <img src='https://r.huaweistatic.com/s/ascendstatic/lst/as/doc/pc/img_doc_2210211.png' alt='' className='w-8 h-8 ml-12'/>
        <img src='https://r.huaweistatic.com/s/ascendstatic/lst/as/doc/pc/img_doc_2210211.png' alt='' className='w-8 h-8 ml-12'/>
        <img src='https://r.huaweistatic.com/s/ascendstatic/lst/as/doc/pc/img_doc_2210211.png' alt='' className='w-8 h-8 ml-12'/>
        <img src='https://r.huaweistatic.com/s/ascendstatic/lst/as/doc/pc/img_doc_2210211.png' alt='' className='w-8 h-8 ml-12'/>
        <img src='https://r.huaweistatic.com/s/ascendstatic/lst/as/doc/pc/img_doc_2210211.png' alt='' className='w-8 h-8 ml-12'/>
      </div>
    </div>
  )
}

function Animation(){
  return(
    <div className='positionContainer'> 
      <div className='rotationalAnimation font-serif'>
        <span style={{'--i':1}}>F</span>
        <span style={{'--i':2}}>R</span>
        <span style={{'--i':3}}>O</span>
        <span style={{'--i':4}}>N</span>
        <span style={{'--i':5}}>T</span>
        <span style={{'--i':6}}>-</span>
        <span style={{'--i':7}}>E</span>
        <span style={{'--i':8}}>N</span>
        <span style={{'--i':9}}>D</span>
        <span style={{'--i':10}}></span>
        <span style={{'--i':11}}>W</span>
        <span style={{'--i':12}}>E</span>
        <span style={{'--i':13}}>B</span>
        <span style={{'--i':14}}></span>
        <span style={{'--i':15}}>D</span>
        <span style={{'--i':16}}>E</span>
        <span style={{'--i':17}}>V</span>
        <span style={{'--i':18}}>E</span>
        <span style={{'--i':19}}>L</span>
        <span style={{'--i':20}}>O</span>
        <span style={{'--i':21}}>P</span>
        <span style={{'--i':22}}>E</span>
        <span style={{'--i':23}}>R</span>
      </div>
    </div>
  )
}

function ContactMe(){
  return(
    <div className='flex justify-center'>
      <div className='basis-2/3 mt-72 flex '>
        <p className='text-start text-sky-600 font-semibold'>Contact</p>
        <p>Don't be shy! Hit me up!</p>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
export default App;
