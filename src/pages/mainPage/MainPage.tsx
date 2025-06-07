import { Header, TaskCard } from "@/widgets";

function MainPage() {
  return (
    <>
      <Header
        isAuthenticated={false}
        onLogout={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="container">
        <h1>Доступные задачи</h1>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </>
  );
}

export default MainPage;
