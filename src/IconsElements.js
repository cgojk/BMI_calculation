
import genderIcon from "./assets/icon-gender.svg";
import ageIcon from "./assets/icon-age.svg";
import muscleIcon from "./assets/icon-muscle.svg";
import pregnacyIcon from "./assets/icon-pregnancy.svg";
import raceIcon from "./assets/icon-race.svg";


export default[
    {   
        id:1,
        sectionTitle:"Gender",
        imageSrc:genderIcon,
        imageAlt:"icon of a person",
        text:"BMI does not account for differences in body composition between"
    },
    {
        
        id:2,
        sectionTitle:"Age",
        imageSrc:ageIcon,
        imageAlt:"icon of a cake",
        text:"In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
    },
    {
        id:3,
        sectionTitle:"Muscle",
        imageSrc:muscleIcon,
        imageAlt:"icon of a muscle",
        text:"BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
    },
    {
        id:4,
        sectionTitle:"Pregnancy",
        imageSrc:pregnacyIcon,
        imageAlt:"icon of a baby",
        text:"Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
    },
    {
        id:5,
        sectionTitle:"Race Icon",
        imageSrc:raceIcon,
        imageAlt:"Icon on a person",
        text:"Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse"
    }
]


