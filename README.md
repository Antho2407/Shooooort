# Shooooort challenge

## Demo

Live demo: http://adamota.com/shooooort/

## Get started 

```
git clone https://github.com/Antho2407/Shooooort.git
npm install
gulp 
```

All the code modifications will be watched. 
Just open dist/index.html for a test.

## Deployment

```
gulp production
```

A minified script will be produced in dist/build. Be sure to include the right script in index.html.

## Architecture 

The project is built with ReactJS Framework + Flux architecture.  
Three ReactJS components are used, one for the header, the second for the form and the final one for the results.
As the API calls are asynchronous, API calls are implemented Action-side, following Facebook developers good practices.

## Animations

Animations are built with VelocityJS.

## Cache

A basic cache implementation was done using the localstorage. User can exit the application without losing his work.

## Responsive Design 

A basic Responsive Design is done, using a part of Skeleton.
http://getskeleton.com/