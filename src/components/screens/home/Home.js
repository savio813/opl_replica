import "./Home.css";
import { InputForm } from "../../common/InputForm";

const Home=({ open, handleOpen })=>{
    
    return(
        
    <div className="hmp">
        
        <div class="grid grid-cols-1 md:grid-cols-2 divide-x">
           
                <div class="px-4 md:px-24 justify-between items-center mb-20">
                    <div class="max-w-4xl mb-14 md:mb-8 mt-8 md:mt-16">
                        <h4 class="text-6xl font-albert-sans font-bold md:font-semibold w-full leading-[1.2] md:leading-[1.1]" >
                            Manual Inspection is 
                            <span class="text-primary font-normal text-6xl font-albert-sans leading-[1.2] md:leading-[1.1]" > Slow &amp; Error-Prone</span>
                        </h4>
                    </div>
                    <div class="font-normal text-base md:text-lg leading-normal md:leading-tight text-[#82858d] font-albert-sans mb-4 md:mb-8" >     
                        AI visual inspection, powered by computer vision, revolutionises
                        the inspection process in manufacturing, enhancing precision and
                        cost-effectiveness, all the while maintaining product
                        excellence.
                    </div>
                    <div class="flex">
                        <div>
                            {/* <button class="bg-primary text-1xl leading-5 rounded-full hover:bg-transparent text-white font-sans font-[400] hover:text-blue py-2 px-4 border border-primary hover:border-secondary w-40 h-[3.5rem]" aria-label="schedule call" onclick={handleOpen} >
                                Schedule Call
                                </button> */}
                                <InputForm/>
                            
                        </div>
                        <div class="flex flex-row" >
                            <button type="button" class="ml-16 h-[3.5rem] w-[3.5rem] inline-flex items-center rounded-full border border-transparent bg-primary p-3 text-white hover:text-primary shadow-sm hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-label="watch video" onclick={() => alert("coming soon")} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-16 h-16 md:h-7 md:w-7" data-astro-cid-ehvcvm4h="true">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                                </svg>
                            </button>
                            <div class="hidden md:block ml-5 font-medium text-5xl md:text-base font-sans mt-4 cursor-pointer hover:text-primary" onclick="window.video.showModal({&quot;title&quot;:&quot;AI Visual Inspection&quot;,&quot;src&quot;:&quot;RHrTxizgOjc&quot;})" >
                                Watch Video
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-full overflow-hidden w-45 h-45">
                <img src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp"
                 alt="AI interface" className="w-full h-full object-cover block"/>

                </div>
            </div>   
                     <div className="ai-container md:font-semibold md:leading-[1.1] md:mb-8 md:mt-16 md:px-24">
                        <div className="bg-[url(https://media.npr.org/assets/img/2023/06/01/gettyimages-1450626672-665ef1519ca7574f42dfefa327cb4ea0526fad2e-s1200-c85.webp)] 
                            block p-6 h-48 w-full object-cover md:h-full md:w-48 rounded-lg 
                                border border-grey-200 shadow-md custom-ai">
                                    <div className="content">
                                    <span className="smh">The Best AI Service Provider</span>
                                    <h1 class="mb-2 text-3xl font-bold text-gray-900">
                                    Crafting Tomorrow's World<br/> with<span class="mb-2 text-3xl font-bold text-white">  AI Excellence </span></h1>
                                        <p class="text-white bold">
                                        The majority of customers lack data-driven insights and automation. Using AI,
                                         Ombrulla assist clients in extracting data from diverse sources such as photos,
                                          videos, and data lakes, which can assist businesses in making data-driven insights
                                           and improving their bottom line.
                                        </p>
                                        <button type="button" class="ml-16 h-[3.5rem] w-[3.5rem] inline-flex items-center rounded-full border border-transparent bg-primary p-3 text-white hover:text-primary shadow-sm hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-label="watch video" onclick={() => alert("coming soon")} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-16 h-16 md:h-7 md:w-7" data-astro-cid-ehvcvm4h="true">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                                </svg>
                            </button>
                            </div>
                         </div>                           
                </div>
                        
                            

                                <div class="divide-x md:grid md:grid-cols-2 md:divide-x md:font-semibold md:leading-[1.1] md:mb-8 md:mt-16 md:px-24 custom-condainer flex flex-col md:flex-row p-4 md:p-8">
                                
                                    <div class="md:col-span-1 custom-pipe-data md:basis-1/2 flex flex-col pt-0 gap-y-6 md:pr-4">
                                        <span class=" w-full font-bold md:font-semibold">AI INFRASTRUCTURE INSPECTION</span>
                                        <h2 class="custom-pipe-data md:leading-[1.1] md:mb-5 text-5xl  md:font-normal w-full mb-14 mt-8 ">
                                            Enhances Efficiency, Safety, and Cost-Effectiveness</h2>
                                        <ul class=" w-full text-black-800 space-y-2 leading-snug">
                                            <li>Cutting-Edge Solution: Ombrulla leverages AI, drones, and IoT technologies to transform infrastructure inspection.</li>
                                            <li>Real-Time Insights: Real-time insights enhance inspection efficiency, safety, and reduce conventional challenges.</li>
                                            <li>Longevity and Cost-Effectiveness: Ombrulla ensures the longevity and safety of critical infrastructure while offering a cost-effective solution.</li>
                                            <li>Responsive Maintenance: Enhances infrastructure management, increasing reliability and responsiveness, and reducing risks.</li>
                                        </ul>
                                        <InputForm/>
                                        {/* <button class="flex bg-primary text-1xl leading-5 rounded-full hover:bg-transparent text-white font-sans font-[400] hover:text-blue py-2 px-4 border border-primary hover:border-secondary w-40 h-[3.5rem]" aria-label="schedule call" onclick={() => alert("coming soon")} >
                                Schedule Call
                            </button> */}
                                    </div>
                                  
                                    <div class="md:col-span-1 custom-pipeimg">
                                        <img src="https://www.ombrulla.com/_astro/ai-infrastructure-inspection.c8f30cbf_ZEO7he.webp"
                                            alt="AI interface" class="custom-pipeimg"/>
                                    </div>
                                </div>

                                        {/* second condainer */}
                                <div class="md:grid md:grid-cols-2 md:divide-x  divide-x md:font-semibold md:leading-[1.1] md:mb-8 md:mt-16 md:px-24 custom-condainer flex flex-col md:flex-row p-4 md:p-8">
                                    <div class="md:col-span-1 secondimg">
                                            <img src="https://www.ombrulla.com/_astro/ai-visual-inspection.7625d432_2nYhqo.webp"
                                                alt="AI interface" class="w-full h-screen object-cover secondimg"/>
                                        </div>
                                            <div class="md:col-span-1 custom-pipe-data md:basis-1/2 flex flex-col pt-0 gap-y-6 md:pr-4">
                                                <span class="font-bold md:font-semibold">AI VISUAL INSPECTION</span>
                                                <h2 class="text-6xl font-albert-sans  md:font-normal w-full">
                                                Improving Quality with Greater Precision</h2>
                                                <ul class="list-disc text-black-800 ml-4 space-y-2 md:max-w-none leading-snug">
                                                    <li>AI Defect Detection: Utilizes computer vision and machine learning to identify and recognise defects during visual inspections autonomously..</li>
                                                    <li>Eagle-Eyed Vision: AI algorithms can identify even the most subtle defects, including microscopic cracks, colour variations, and misalignments.</li>
                                                    <li>Eagle-Eyed Vision: AI algorithms can identify even the most subtle defects, including microscopic cracks, colour variations, and misalignments.</li>
                                                    <li>Real-Time Insights: AI defect detection provides immediate feedback, enabling proactive interventions and adjustments to production processes.</li>
                                                </ul>
                                                <InputForm/>
                                                {/* <button class="bg-primary text-1xl leading-5 rounded-full hover:bg-transparent text-white font-sans font-[400] hover:text-blue py-2 px-4 border border-primary hover:border-secondary w-full md:w-40 h-[3.5rem]" aria-label="schedule call" onclick={() => alert("coming soon")}>
                                                    Schedule Call
                                                </button> */}
                                    </div>

                                   
                                </div>


                                        {/* third condainer */}

                                <div class=" divide-x md:grid md:grid-cols-2 md:divide-x md:font-semibold md:leading-[1.1] md:mb-8 md:mt-16 md:px-24 custom-condainer flex flex-col md:flex-row p-4 md:p-8">
                                
                                    <div class="md:col-span-1 custom-pipe-data md:basis-1/2 flex flex-col pt-0 gap-y-6 md:pr-4">
                                        <span class="font-bold md:font-semibold">AI DATA ANALYTICS</span>
                                        <h2 class="text-6xl font-albert-sans  md:font-normal w-full">
                                        Empowers Businesses to Make Insightful Decisions</h2>
                                        <ul class="list-disc text-black-800 ml-4 space-y-2 md:max-w-none leading-snug">
                                            <li>Actionable Insights: AI data analysis enhances decisions, personalizes customer experiences and improve operations.</li>
                                            <li>Increased Customer Loyalty: AI predictive analytics for personalized recommendations & increased customer loyalty.</li>
                                            <li>Quality Assurance: AI analytics identifies and mitigates potential issues, ensuring the quality and reliability of products and services.</li>
                                            <li>Efficiency and Responsiveness: Customers benefit from increased efficiency, improved product quality, and more responsive interactions with businesses.</li>
                                        </ul>
                                        <InputForm/>
                                        {/* <button class="bg-primary text-1xl leading-5 rounded-full hover:bg-transparent text-white font-sans font-[400] hover:text-blue py-2 px-4 border border-primary hover:border-secondary w-full md:w-40 h-[3.5rem]" aria-label="schedule call" onclick={() => alert("coming soon")}>
                                            Schedule Call
                                        </button> */}
                                    </div>

                                    <div class="md:col-span-1 thirdimg">
                                        <img src="https://www.ombrulla.com/_astro/ai-data-analytics.ef51a904_1g36GR.webp"
                                            alt="AI interface" class="thirdimg"/>
                                    </div>
                                </div>


                   <div class="max-w-7xl py-64 px-20 md:py-28 md:px-28 md:max-w-none custom-blue">
                   <div class="bg-blue-700 bg-cover grid grid-cols-1 gap-y-64 gap-x-8 md:grid-cols-2">
                       <div class=" text-white items- flex flex-col max-w-7xl py-20 px-12 md:py-28 md:px-28 md:max-w-none"> 
                       {/* custom-cnt gap-y-16 md:gap-y-4 */}
                            <h1 className="bl_a">PETRAN</h1>
                            <span>Petran PErformance - TRacking - ANalytics</span>
                            <h2 className="bl_b"> AI & IoT Enabled<br/> Asset Performance<br/> Management</h2>                                       
                            <p>Petran offers an Asset Performance Management (APM) system that harnesses the power
                                 of artificial intelligence and the Internet of Things (IoT) to empower data-driven 
                                 decision-making and enable proactive maintenance strategies.
                            </p>
                            <InputForm/>
                            {/* <button class="bg-primary mt-8 text-1xl leading-5 rounded-full hover:bg-transparent text-white font-sans font-[400] hover:text-blue py-2 px-4 border border-primary hover:border-secondary w-full md:w-40 h-[3.5rem]" aria-label="schedule call" onclick={() => alert("coming soon")}>
                                Schedule Call
                            </button> */}
                       </div>
                        <div class="max-w-none md:min-w-full rounded-xl">
                            <img src="https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp" alt="office" className="blueimg"></img>
                        </div>
                        
                    </div>
                   </div>

                      <div class="custom-crd grid grid-cols-1 md:grid-cols-3 divide-x">
                        <div class="bg-white-700">
                            <span>PRODUCTS</span>
                            <h3 className="cbh">Our HR Tools</h3>
                            <p>Our job grading and evaluation tool, combined<br/>
                            with the compensation management tool, is a
                            highly effective Saas-based solution. it greatly
                            assists HR consultants and managers in carrying
                            out their roles with efficiency and precision</p>
                        </div>
                        <div class="custom-crd shadow-xl bg-gray-300">
                            <h1 className="ch">Job Grading and Evaluation</h1>
                            <p>Job evaluation assesses and ranks
                                 job roles in an organization based on
                                  responsibilities and skills, often for
                                   compensation and structuring purposes.</p>

                        </div>
                        <div class="custom-crd shadow-xl bg-gray-300">
                            <h1 className="ch">Compensation Management</h1>
                            <p>Compensation management
                                 software automates salary planning,
                                  budget management, and equity
                                   analysis, ensuring fair and 
                                   competitive pay practices.</p>
                        </div>

                     </div>  



     </div>




        
      
     
    );
   
}
export default Home;