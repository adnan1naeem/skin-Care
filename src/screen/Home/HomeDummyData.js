export const data = [
    {
      id: '1',
      image1: require('../../../assets/images/HydrationIcon.png'),
      progress: 60,
      text: 'Hydration',
      Desciption:"Hydrating your skin means increasing its water content. If your skin is dehydrated, it can appear flaky, dull, and dry. Hydrated skin is smooth, radiant, and has an even tone.",
      Header:"Your Hydration",
      Deatil:" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    },
    {
      id: '2',
      image1: require('../../../assets/images/OilLevelIcon.png'),
      progress: 89,
      text: 'Oiliness',
      Desciption:"Hydrating your skin means increasing its water content. If your skin is dehydrated, it can appear flaky, dull and dry. Hydrated skin is smooth, radiant and has an even tone.",
      Header:"Your Oiliness",
      Deatil:"It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of  using Lorem Ipsum is that it has a more-or-less normal distribution of  letters, as opposed to using 'Content here, content here', making it  look like readable English Many desktop publishing packages and web page editors now use Lorem  Ipsum as their default model text, and a search for 'lorem ipsum' will  uncover many web sites still in their infancy. Various versions have  evolved over the years, sometimes by accident, sometimes on purpose ",
    },
    {
      id: '3',
      image1: require('../../../assets/images/ElasticityIcon.png'),
      progress: 10,
      text: 'Elasticity',
      Desciption:"Hydrating your skin means increasing its water content. If your skin is dehydrated, it can appear flaky, dull and dry. Hydrated skin is smooth, radiant and has an even tone.",
      Header:"Your Elasticity",
      Deatil:"It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of  using Lorem Ipsum is that it has a more-or-less normal distribution of  letters, as opposed to using 'Content here, content here', making it  look like readable English Many desktop publishing packages and web page editors now use Lorem  Ipsum as their default model text, and a search for 'lorem ipsum' will  uncover many web sites still in their infancy. Various versions have  evolved over the years, sometimes by accident, sometimes on purpose ",
    },
    {
      id: '4',
      image1: require('../../../assets/images/Recycle.png'),
      Year: 24,
      text: 'Skin Age',
    },
  ];
  
  export const DailyRoutine= [
    {
      id: '1',
      image1: require('../../../assets/images/Analyzer.png'),
      text: 'Analyze skin',
      buttonText:"Analyze Now",
      DailyRoutineTask:false,
      desciption:'Understand what your skin is telling you today!'
    },
  ];
  export const DailyRoutine2= [
    {
      id: '1',
      image1: require('../../../assets/images/SkinDrop.png'),
      text: 'Hydrate Skin',
      buttonText:"Mark As Done",
      description:'Great for dehydrated and oily skin types.'
    },
    {
      id: '2',
      image1: require('../../../assets/images/SkinDrop.png'),
      text: 'Cleanse',
      buttonText:"Mark As Done",
      DailyRoutineTask:false,
      description:'Great for Cleanse and oily skin types.'
    },
    {
      id: '3',
      image1: require('../../../assets/images/SkinDrop.png'),
      text: 'Skin Tone',
      buttonText:"Mark As Done",
      DailyRoutineTask:false,
      description:'Great for oily skin types.'
    },
    {
      id: '4',
      image1: require('../../../assets/images/SkinDrop.png'),
      text: 'Moisturize Skin',
      buttonText:"Mark As Done",
      DailyRoutineTask:false,
      description:'Great for dehydrated skin types.'
    },
    {
      id: '5',
      image1: require('../../../assets/images/SkinDrop.png'),
      text: 'Protection Skin',
      buttonText:"Mark As Done",
      DailyRoutineTask:false,
      description:'Great for Protect your types.'
    },
  ];
  export const DailyRoutineData=(latestAnalysisData)=>{
    const data = [
      {
        id: '1',
        image1: require('../../../assets/images/SkinDrop.png'),
        text: 'Hydrate skin',
        DailyRoutineTask:latestAnalysisData?.hydrate,
        buttonText:"Mark As Done",
        description:'Quench your skin\'s thirst with a splash of hydration!'
      },
      {
        id: '2',
        image1: require('../../../assets/images/SkinDrop.png'),
        text: 'Cleanse',
        buttonText:"Mark As Done",
        DailyRoutineTask:latestAnalysisData?.cleanse,
        description:'Wash away impurities for a fresh start to your day!'
      },
      {
        id: '3',
        image1: require('../../../assets/images/SkinDrop.png'),
        text: 'Tone',
        buttonText:"Mark As Done",
        DailyRoutineTask:latestAnalysisData?.tone,
        description:'Balance and prep your skin for the perfect skincare routine!'
      },
      {
        id: '4',
        image1: require('../../../assets/images/SkinDrop.png'),
        text: 'Moisturize skin',
        buttonText:"Mark As Done",
        DailyRoutineTask:latestAnalysisData?.moisturize,
        description:'Lock in moisture for soft, supple skin all day long!'
      },
      {
        id: '5',
        image1: require('../../../assets/images/SkinDrop.png'),
        text: 'Protection',
        buttonText:"Mark As Done",
        DailyRoutineTask:latestAnalysisData?.protection,
        description:'Shield your skin from the sun\'s harmful rays and environmental damage!'
      },
    ]
  return data;
}