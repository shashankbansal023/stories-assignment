/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect , useState , useRef}  from 'react'
import '../styles.css';
import ProgressBar from './ProgressBar';

const Story = ({stories, currentIndex , setShowStory, setCurrentIndex, showStory} : {
    stories: any[],
    currentIndex: number;
    setShowStory: (showStory: boolean) => void;
    showStory: boolean;
    setCurrentIndex: (currentIndex: number) => void;   
}) => {

    const ref = useRef<any>();
    const [width , setWidth] = useState(0);
    const widthRef = useRef<any>();
    const currentIndexRef = useRef<any>();

    currentIndexRef.current = currentIndex;
    widthRef.current = width;

    useEffect(() => {
        ref.current = setInterval(() => {
            if(Number(widthRef.current) >= 100) {
                setWidth(0);
                setCurrentIndex(currentIndex + 1);
            }else{
                setWidth(width => width + 20);
            }
        } , 1000)

        return () => {
            clearInterval(ref.current);
        }
    } , [])

    function navigateStory(e : any){
        const median = e.target.offsetLeft + (e.target.clientWidth / 2);
        console.log("median", median);
        if(e.clientX  < median){
            if(Number(currentIndexRef.current) <= 1) {
                console.log("current index inside" , currentIndexRef.current);
                setShowStory(false);
                setCurrentIndex(1);
                clearInterval(ref.current);
                return;
            }else{
                setCurrentIndex(currentIndex - 1);
                setWidth(0);
            }
        
        }else{
            if(Number(currentIndexRef.current) === stories.length - 1){
                console.log("outside current");
                setShowStory(false);
                setCurrentIndex(1);
                clearInterval(ref.current);
                return;
            }else{
                setCurrentIndex(currentIndex + 1);
                setWidth(0);
            }
          
        }
    }

    return (
        showStory && currentIndex > 0 && 
        <div onClick={(e) => navigateStory(e)} className='story' style={{backgroundImage: `url(${stories[currentIndex - 1].url})`, backgroundRepeat: 'no-repeat' , width:'100%', height:'100%'}}>
            <ProgressBar width={width} />
           <div className='cross-icon' onClick={() => {
                setShowStory(false);
                setCurrentIndex(0);
           }}>X</div>
        </div>
    )
}

export default Story;