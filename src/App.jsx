import React from 'react';
import GlobalStyle from './components/Styles/GlobalStyle';
import { Layouts, SignUpButtons } from './components/Styles/Common';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Intro from './components/Intro';
import Benefit from './components/Benefit';
import Partner from './components/Partner';
// import FloatingButton from './components/FloatingButton';

function App () {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Layouts>
				<Hero />
				<Info />
				<Intro />
				<Benefit />
				<Partner />
				<SignUpButtons link="https://www.coffeechat.kr/signUp" target="_blank" text="가입하고 혜택받기" />
			</Layouts>
		</>
	);
}

export default App;