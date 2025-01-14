// pages/guide.tsx

import { useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';

// Type for guide data
type GuideItem = {
  name: string;
  description: string;
  usage: string;
};

type Props = {
  guideItems: GuideItem[];
};

const GuidePage: React.FC<Props> = ({ guideItems }) => {
  // useState Hook to keep track of active item
  const [activeItem, setActiveItem] = useState<GuideItem | null>(null);

  // useEffect Hook to log when the component mounts
  useEffect(() => {
    console.log('Guide page loaded');
    return () => {
      console.log('Guide page unloaded');
    };
  }, []);

  // Function to handle setting the active item
  const handleItemClick = (item: GuideItem) => {
    setActiveItem(item);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-green-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Guide to React Hooks and Next.js Functions</h1>
      </header>

      <main className="p-6">
        <section>
          <h2 className="text-2xl font-semibold">Hooks & Functions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {guideItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
                onClick={() => handleItemClick(item)}
              >
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {activeItem && (
          <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">Usage: {activeItem.name}</h2>
            <p className="mt-4">{activeItem.usage}</p>
          </section>
        )}
      </main>

      <footer className="bg-green-600 text-white p-4 text-center mt-auto">
        <p>&copy; 2025 K V Jaya Harsha</p>
      </footer>
    </div>
  );
};

// getStaticProps for static content
export const getStaticProps = async () => {
  const guideItems: GuideItem[] = [
    {
      name: 'useState',
      description: 'A hook that lets you add state to a functional component.',
      usage: `const [state, setState] = useState(initialState);
      setState(newState);`
    },
    {
      name: 'useEffect',
      description: 'A hook that lets you perform side effects in your components.',
      usage: `useEffect(() => {
        // Your effect code here
      }, [dependencies]);`
    },
    {
      name: 'useContext',
      description: 'A hook to access the value of a context in functional components.',
      usage: `const value = useContext(MyContext);`
    },
    {
      name: 'useReducer',
      description: 'A hook that lets you manage complex state logic in functional components.',
      usage: `const [state, dispatch] = useReducer(reducer, initialState);`
    },
    {
      name: 'useMemo',
      description: 'A hook to memoize expensive calculations.',
      usage: `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
    },
    {
      name: 'useCallback',
      description: 'A hook to memoize callback functions to prevent unnecessary re-renders.',
      usage: `const memoizedCallback = useCallback(() => { doSomething(); }, [dependencies]);`
    },
    {
      name: 'useRef',
      description: 'A hook to persist values across renders and access DOM elements directly.',
      usage: `const myRef = useRef(null);
      useEffect(() => { myRef.current.focus(); }, []);`
    },
    {
      name: 'useLayoutEffect',
      description: 'A hook similar to useEffect but it runs synchronously after all DOM mutations.',
      usage: `useLayoutEffect(() => {
        // Your code here
      }, [dependencies]);`
    },
    {
      name: 'useRouter (Next.js)',
      description: 'A hook to access the Next.js router object for routing functionalities.',
      usage: `const router = useRouter();
      const { query } = router;
      router.push('/new-page');`
    },
    {
      name: 'getStaticProps (Next.js)',
      description: 'A Next.js function used to fetch data at build time for static generation.',
      usage: `export const getStaticProps = async () => {
        const data = await fetch('API_URL');
        return {
          props: { data }
        };
      };`
    },
    {
      name: 'getServerSideProps (Next.js)',
      description: 'A Next.js function for fetching data on each request.',
      usage: `export const getServerSideProps = async () => {
        const data = await fetch('API_URL');
        return { props: { data } };
      };`
    },
    {
      name: 'getInitialProps (Next.js)',
      description: 'A Next.js function for fetching data before rendering, either for pages or custom `_app`.',
      usage: `MyPage.getInitialProps = async () => {
        const data = await fetch('API_URL');
        return { data };
      };`
    },
    {
      name: 'getStaticPaths (Next.js)',
      description: 'A Next.js function used with `getStaticProps` for dynamic routes to specify which paths should be pre-rendered.',
      usage: `export const getStaticPaths = async () => {
        const paths = [{ params: { id: '1' } }];
        return { paths, fallback: false };
      };`
    },
  ];

  return {
    props: {
      guideItems,
    },
  };
};

export default GuidePage;
