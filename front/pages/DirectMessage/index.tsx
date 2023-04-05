import React from 'react';
import { Container, Header } from '@pages/DirectMessage/styles';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import gravatar from 'gravatar';
import { useParams } from 'react-router';
import ChatList from '@components/ChatList';
import ChatBox from '@components/ChatBox';

const DirectMessage = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const { data: userData } = useSWR(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const { data: myData } = useSWR('/api/users', fetcher);

  if (!userData || !myData) {
    return null;
  }

  return (
    <Container>
      <Header>
        <img src={gravatar.url(userData?.email, { s: '28px', d: 'retro' })} alt={userData?.nickname} />
        <span>{userData?.nickname}</span>
      </Header>
      <ChatList />
      <ChatBox chat="" />
    </Container>
  );
};

export default DirectMessage;
