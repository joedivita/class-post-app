import './styles/app.css';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { router } from './config/routes';

const mountingPoint = document.getElementById('app');
ReactDom.render(router, mountingPoint);

