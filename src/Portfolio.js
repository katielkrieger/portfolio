import React, { Component } from 'react';
import './Portfolio.css';
import Project from './Project';

class Portfolio extends Component {

  render() {

    let projects = this.props.projects.map((project, i) => (
      <Project
        key={i}
        name={project.name}
        description={project.description}
        technologies={project.technologies}
        github={project.github}
        url={project.url}
        image={project.image}
      />
    ))

    return (
      <div className="portfolio">
        <h2>Portfolio</h2>
        {projects}
      </div>
    )
  }
}


export default Portfolio;

Portfolio.defaultProps = {
  projects: [
    {
      name: 'Tradecraft Patterns',
      description: "I helped Tradecraft develop a new website designed to support job searches. Users can browse companies and add specific companies to their funnel, where they can be shuffled between various stages such as Research, Interview, and Follow Up. Users can also keep personal notes about specific companies.",
      technologies: 'React, Node.js, Mongoose, OAuth 2.0 (Google), Sass',
      github: 'https://github.com/rithmschool/patterns-api',
      url: 'https://patterns-staging.herokuapp.com',
      image: './static/images/Patterns.jpg'
    },
    {
      name: 'My Bookshelves',
      description: "Users can keep track of books they want to read, and can rate and review books they have read. A user's reviews are shown on their home page in an interactive D3 visualization. Users can add books to their booklist or bookshelf using a search functionality. They can also mark books on their booklist as read. Doing so allows them to rate and review the book, and moves it from their booklist to their bookshelf. Users can browse the top rated books on the site and email their reviews to a friend using a simple form. Users can also follow other users and explore the top rated books of the people they follow.",
      technologies: 'Python with Flask, SQLAlchemy, JavaScript, D3, jQuery, AJAX',
      github: 'https://github.com/katielkrieger/bookshelf-app',
      url: 'https://my-bookshelves.herokuapp.com/',
      image: './static/images/my-bookshelves.jpg'
    },
    {
      name: 'Bay Area Air Quality',
      description: "D3 data visualization of air quality in the Bay Area from 2010-2016. Data was scraped from the Bay Area Air Quality Management District's website. Users can toggle between four locations and use a slider to change years. A summary view is also available.",
      technologies: 'D3, Python, BeautifulSoup, JavaScript',
      github: 'https://github.com/katielkrieger/bay_area_air_quality',
      url: 'https://katielkrieger.github.io/bay_area_air_quality/',
      image: './static/images/air-quality.jpg'
    },
    {
      name: 'New York Times History',
      description: "Explore history by looking through the New York Times archives. Search headlines or entire articles to discover the first time the New York Times wrote about a particular subject. See a preview of the story along with a link to the full article.",
      technologies: 'Python with Flask, SQLAlchemy, JavaScript, D3, jQuery',
      github: 'https://github.com/katielkrieger/nyt_search',
      url: 'https://katielkrieger.github.io/nyt_search/',
      image: './static/images/NYT.jpg'
    },
    {
      name: 'To Do App',
      description: "Keep track of to dos using this simple web app. Easily add new to dos, mark a to do as complete, and remove completed to dos.",
      technologies: 'jQuery, JavaScript, Bootstrap',
      github: 'https://github.com/katielkrieger/to_do_app',
      url: 'https://katielkrieger.github.io/to_do_app/?#',
      image: './static/images/todo.jpg'
    }
  ]
};
