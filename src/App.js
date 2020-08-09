import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import TopBar from './components/TopBar';
import ALAN_API_KEY from './config/alanai';
import NewsCards from './components/NewsCards';
import wordsToNumbers from 'words-to-numbers';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const App = () => {
  const [activeArticle, setActiveArticle] = useState(-1);
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: ALAN_API_KEY,
      onCommand: ({command, articles, number}) => {
        switch(command) {
          case 'newNews':
            setNewsArticles(articles);
            setActiveArticle(-1);
           break;
          case 'reload':
            window.location.reload();
           break;
          case 'highlight':
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
           break;
          case 'open':
            const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
            const article = articles[parsedNumber - 1];
  
            if (parsedNumber > 20) {
              alanBtn().playText('Please try that again...');
              console.log('1st gateway');
            } else if (article) {
              window.open(article.url, '_blank');
              alanBtn().playText('Opening...');
            } else {
              alanBtn().playText('Please try that again...');
              console.log('3rd gateway');
            }
           break;
          default:
            return null; 
        }
      }
    });
  }, []);

  return (
    <div>
      <TopBar />

      <br />

      {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}

      <NewsCards articles={newsArticles} activeArticle={activeArticle} />

      {!newsArticles.length ? (
        <div>
          <hr />

          <div className="Footer">
            Website Developed by <a href="https://surya-kasibhatla-portfolio.web.app/" target="_blank" rel="noopener noreferrer">Surya Kasibhatla</a>, a 12 year old!
          </div>
        </div>
      ) : null}
    </div>
  );
} 

export default App;