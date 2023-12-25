import weights from '../assets/weights.webp';
import cardio from '../assets/cardio.jpg';
import cross from '../assets/cross.jpg';
import loss from '../assets/loss.webp';
import zumba from '../assets/zumba.jpg';
import floor from '../assets/floor.jpg';
import { Link } from 'react-router-dom';

export const MenuList = [
{
   

    name: "Body Strengthening",

    image: weights,
    disc: "The general definition of strength training is any physical movement in which you use your body weight or equipment. ",

},

{
    name: "cardio",
    image: cardio,
    disc: "cardio is any activity that gets you breathing a little harder and increases your heart rate.",
},

{
    name: "Cross Fit",
    image: cross,
    disc: "CrossFit is a strength and conditioning workout that is made up of functional movement performed at a high intensity level.",
},

{
    name: "Weight Loss",
    image: loss,
    disc: "Some great choices for burning calories include walking, jogging, running, cycling, swimming, weight training, interval training, yoga, and Pilates.",
},

{
    name: "Aerobics/Zumba",
    image: zumba,
    disc: "Zumba targets lots of different muscle groups at once for total body toning. Boosts your heart health.",
},

{
    name: "Floor Exercise",
    image: floor,
    disc: "Doing floor exercises help engage the full 'core,' which we are defining here as lumbo-pelvic and shoulder stability.",
},



]