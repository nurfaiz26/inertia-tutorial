// import Layout from "./Layout/Layout";

const Home = ({ name }) => {
    return (
        <>
            <h1 className="mt-10 text-center text-xl font-bold">Hello {name}!</h1>
        </>
    );
}

// Home.layout = page => <Layout children={page} />

export default Home;
