import { createContext } from "react";

export const ModeContext = createContext()

export const initialMode = "light"

export const styles = {
    dark:{
        navbar:{
           navMode: "navBar--dark",
           boxMenuMode:"boxMenu--dark",
           boxMenuItemMode:"boxMenu__item--dark",
           boxMenuIconMode:"boxMenu__item_i--dark",
        //    boxMenuItemHoverMode:"boxMenu__item--dark"
        },
        card:{
            boxCardMode:"boxCard--dark",
            cardBodyMode:"card-body--dark",
            cardLinkMode:"card-link--dark",
      
        },
        gallery:{
            boxGalleryMode:"boxGallery--dark"
        },
        home:{
            boxMainMode:"boxMain--dark",
            boxMain__title:"boxMain__title--dark"
        }, 
        auth:{
            boxAuthMode:"boxAuth--dark",
            formContainerMode:"form-container--dark",
            socialButtonMode:"form-container__social-button--dark",
            formSubmitMode:"form-submit-btn--dark",
            formInputMode:"form-container__input--dark",
            signUpLinkPMode:"signUpLink-p--dark"
        },
        switch:{
            toggleMode:"toggle--dark"
        },
        tutor:{
            boxTutorMode:"boxTutor--dark",
            boxHeadMode:"boxHead--dark",
            boxBodyMode:"boxBody--dark",
            tutorNameMode:"tutorName--dark",
          
        },
        dash: {
            boxDashMode:"boxDash--dark",
        },
        layout: {
            boxLayoutMode:"boxLayout--dark",
        },
        course:{
            boxCourseMode:"boxCourse--dark"
        },
        service:{
            boxModalMode:"modalService--dark",
            boxDialogContentMode:"content--dark",
            btnCloseBgMode:"btnClose--dark",
            btnCloseIconMode:"btnClose__icon--dark",
           
        },
        evaluation:{
            boxInfoMode:"boxInfo--dark"
            // boxTestMode:"boxTest--dark",
            // testTitleMode:"boxTest__title--dark",
            // boxMoneyMode:"boxColon--dark",
            // boxPriceMode:"boxColon__price--dark"
        }
        
    },
    light:{
        navbar:{
           navMode: "navBar--light",
           boxMenuMode:"boxMenu--light",
           boxMenuItemMode:"boxMenu__item--light",
           boxMenuIconMode:"boxMenu__item_i--light",
        //    boxMenuItemHoverMode:"boxMenu__item--light"
        },
        card:{
            boxCardMode:"boxCard--light",
            cardBodyMode:"card-body--light",
            cardLinkMode:"card-link--light",
         
        },
        gallery:{
            boxGalleryMode:"boxGallery--light"
        },
        home:{
            boxMainMode:"boxMain--light",
            boxMain__title:"boxMain__title--ligth"
        },
        auth:{
            boxAuthMode:"boxAuth--light",
            formContainerMode:"form-container--light",
            socialButtonMode:"form-container__social-button--light",
            formSubmitMode:"form-submit-btn--light",
            formInputMode:"form-container__input--light",
            signUpLinkPMode:"signUpLink-p--light"

        },
        switch:{
            toggleMode:"toggle--light"
        },
        tutor:{
            boxTutorMode:"boxTutor--light",
            boxHeadMode:"boxHead--light",
            boxBodyMode:"boxBody--light",
            tutorNameMode:"tutorName--light",
      
        },
        dash: {
            boxDashMode:"boxDash--light",
        },
        layout: {
            boxLayoutMode:"boxLayout--light",
        },
        course:{
            boxCourseMode:"boxCourse--light"
        },
        service:{
            boxModalMode:"modalService--light",
            boxDialogContentMode:"content--light",
            btnCloseBgMode:"btnClose--light",
            btnCloseIconMode:"btnClose__icon--light",
            
        },
        evaluation:{
            boxInfoMode:"boxInfo--light"
            // boxTestMode:"boxTest--light",
            // testTitleMode:"boxTest__title--light",
            // boxMoneyMode:"boxColon--light",
            // boxPriceMode:"boxColon__price--light"
        }

    }
}