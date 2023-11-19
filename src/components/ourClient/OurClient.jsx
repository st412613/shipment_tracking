import React from 'react';
import OurClientStyle from './OurClientStyle';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: 'https://content.jdmagicbox.com/comp/kurnool/a5/9999p8518.8518.191212180056.v4a5/catalogue/ampath-diagnostics-sri-gayathri-hospital-kallur-road-kurnool-diagnostic-centres-07vhm6kv9e.jpg?clr=',
    title: 'ampath',
  },
  {
    img: 'https://www.bentec.com/img/logo.png',
    title: 'bentech',
  },
  {
    img: 'https://tiimg.tistatic.com/images/l/2/logo_17516.jpg',
    title: 'BigImports&gift',
  },
  {
    img: 'https://cpimg.tistatic.com/06414053/b/4/Disulfiram-Tablets-Ip-500-Mg.jpg',
    title: 'healthylife',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rkFwYudQZB9V7oMp92klOEvFXOe1zgCUEPTqrMpyr2chosnI00d6pw568xcGlY7FQBU&usqp=CAU',
    title: 'icon',
  },
  {
    img: 'https://www.lightbookinternational.com/logo.png',
    title: 'lightIcon',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/MSD_Sharp_%26_Dohme_GmbH_logo.svg/2560px-MSD_Sharp_%26_Dohme_GmbH_logo.svg.png',
    title: 'msd',
  },
  {
    img: 'https://www.cphi-online.com/REMI%20logo%20300%20x%20300-comp285038.jpg',
    title: 'remi',
  },
  {
    img: 'https://www.rentokil-initial.com/~/media/Images/R/Rentokil/content-images/image-gallery/rentokil.jpg?w=540',
    title: 'rentokil',
  },
  {
    img: 'https://static.wixstatic.com/media/177e50_a39bcd30d9444e768c4a076594b6f318~mv2.png/v1/crop/x_0,y_66,w_750,h_168/fill/w_520,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_edited.png',
    title: 's4healthcare',
  },
  {
    img: 'http://www.packagingdirectory.co.uk/wp-content/themes/directorypress/thumbs/list1030logo.jpg',
    title: 'Skamen',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/SRL_Diagnostics_Logo.png',
    title: 'srl',
  },
  {
    img: 'https://static.wixstatic.com/media/19d425_28c40b3a7bc74f239a67d394361ab89a~mv2.png/v1/fit/w_2500,h_1330,al_c/19d425_28c40b3a7bc74f239a67d394361ab89a~mv2.png',
    title: 'sap',
  },
];

const OurClient = () => {
  const classes = OurClientStyle();
  return (
    <div className={classes.ourClientContainer}>
      <div className={classes.ourClientContent}>
        <ImageList sx={{ width: '100%', height: '100%' }} cols={4}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
                style={{objectFit: 'contain'}}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default OurClient;