import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="text-start question py-5 ">
                <h1 className="question fs-1">Q.1: Difference between javascript and nodejs</h1>
                <h4 className='answer mb-4 text-xl py-5 leading-loose text-white'>Ans: JavaScript is a simple programming language that runs in any browser
          JavaScript Engine. Whereas Node JS is an interpreter or running
          environment for a JavaScript programming language that holds many
          excesses, it requires libraries that can easily be accessed from
          JavaScript programming for better use.
            </h4>
                <p className="fs-4 fw-light"></p>
            </div>
            
            <h1 className='question text-4xl '>Q2: When should you use nodejs and when should you use mongodb</h1>
            <h4 className='answer mb-4 text-xl py-5 leading-loose text-white'>Ans:  NodeJS and MongoDB are two different process. Here I tried to explain
          as simpler as possible: NodeJS Shortly we can say, NodeJS is a
          JavaScript runtime environment. It's actually helps JavaScript to run
          outside of server. It's used in server side development. MongoDB But,
          MongoDB is NoSQL database which is document oriented. It represents
          data as of JSON documents. It's used for store data. Summary The
          summary is MongoDB is a database where we can store data and NodeJS
          helps us to to connect our client site to database by it's server
          site. Example: Suppose you are building a website and you need a
          database to store the data or information so here you can use MongoDB
          but to be connected with MongoDB you need a connector, so here you can
          use NodeJS which will help your website to run outside of server.
            </h4>
            <h1 className='question text-4xl py-5'>Q3:Differences between sql and nosql databases</h1>
            <h4 className='answer text-xl leading-loose text-white'>Ans:  SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON.
            </h4>


            <h1 className='question text-4xl py-5'>Q4:What is the purpose of jwt and how does it work</h1>
            <h4 className='answer text-xl leading-loose text-white'>Ans:   JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued
            </h4>
        </div>
    );
};

export default Blog;