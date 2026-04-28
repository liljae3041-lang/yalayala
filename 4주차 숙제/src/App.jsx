// App.jsx
function App() {
  return (
    <div>
      <ProfileCard
        name="김철수"
        age={25}
        job="프론트엔드 개발자"
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
      />
      <ProfileCard
        name="이영희"
        age={28}
        job="디자이너"
        avatar="https://randomuser.me/api/portraits/women/1.jpg"
      />
    </div>
  );
}

// 여기에 ProfileCard 컴포넌트를 만드세요!
function ProfileCard({ name, age, job, avatar }) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>나이: {age}</p>
      <p>직업: {job}</p>
    </div>
  );
}

export default App;