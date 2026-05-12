function App() {
  // 프로필 데이터 배열
  const profiles = [
    {
      id: 1,
      name: "김철수",
      age: 25,
      job: "프론트엔드 개발자",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "이영희",
      age: 28,
      job: "디자이너",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    }
  ];

  return (
    <div className="app-container">
      <h1>프로필 카드</h1>
      <div className="card-container">
        {/* map()을 이용해 배열의 각 프로필을 ProfileCard로 렌더링 */}
        {profiles.map((profile) => (
          <ProfileCard 
            key={profile.id}
            name={profile.name}
            age={profile.age}
            job={profile.job}
            avatar={profile.avatar}
          />
        ))}
      </div>
    </div>
  );
}

// ProfileCard 컴포넌트
// Props로 name, age, job, avatar를 받아서 카드 형태로 표시
function ProfileCard({ name, age, job, avatar }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={name} className="profile-image" />
      <h2>{name}</h2>
      <p className="info">
        <strong>나이:</strong> {age}세
      </p>
      <p className="info">
        <strong>직업:</strong> {job}
      </p>
    </div>
  );
}