import React from 'react';
import Home from '../containers/Home';
import { hydrateRoot } from 'react-dom/client';

const container = document.getElementById('root');

hydrateRoot(container, <Home />)