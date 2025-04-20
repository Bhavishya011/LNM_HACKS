import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { TrendingCollections } from './components/TrendingCollections';
import { TopSellers } from './components/TopSellers';
import { ExploreNFTs } from './components/ExploreNFTs';

function App() {
  return (
    <Layout>
      <Hero />
      <TrendingCollections />
      <TopSellers />
      <ExploreNFTs />
    </Layout>
  );
}

export default App;