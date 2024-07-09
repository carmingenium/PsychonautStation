import { BooleanLike } from 'common/react';

import { useBackend } from '../backend';
import {
  BlockQuote,
  Box,
  Button,
  LabeledList,
  NoticeBox,
  Section,
} from '../components';
import { Window } from '../layouts';

type Data = {
  prefix: string;
  refresh: BooleanLike;
  token?: string;
  linked?: BooleanLike;
  display_name?: string;
  username?: string;
  discriminator?: string;
  patron?: BooleanLike;
};

export const DiscordVerification = () => {
  const { data } = useBackend<Data>();
  const {
    prefix,
    token,
    linked,
    display_name,
    username,
    discriminator,
    patron,
  } = data;

  return (
    <Window title="Discord Verification" width={440} height={550}>
      <Window.Content>
        {linked ? (
          <>
            <NoticeBox info>Hesabın Discord&apos;a bağlı.</NoticeBox>
            {patron ? (
              <NoticeBox success>
                Patreon destekçisi olduğun için teşekkür ederiz.
              </NoticeBox>
            ) : (
              <NoticeBox info>
                Bizi Patreon&apos;dan destekleyebilirsin.
              </NoticeBox>
            )}
            <Section title="Bağlı Hesap" buttons={<RefreshButton />}>
              <LabeledList>
                <LabeledList.Item label="Görünen ad">
                  {display_name ?? 'Failed'}
                </LabeledList.Item>
                <LabeledList.Item label="Kullanıcı adı">
                  {username ?? 'Failed'}
                  {discriminator &&
                    discriminator !== '0' &&
                    `#${discriminator}`}
                </LabeledList.Item>
              </LabeledList>
            </Section>
          </>
        ) : (
          <>
            <NoticeBox danger>Hesabın Discord&apos;a bağlı değil.</NoticeBox>
            <Section title="Doğrulama" buttons={<RefreshButton />}>
              <Box mb={1}>
                Bu tokeni Discord&apos;da {prefix}verify yazdıktan sonra
                yapıştırarak hesabını doğrulayabilirsin:
              </Box>
              <BlockQuote mb={1}>{token}</BlockQuote>
            </Section>
          </>
        )}
        <Section title="Patreon">
          <Box mb={1}>
            Bizi Patreon&apos;dan destekleyerek ayrıcalıklardan
            faydalanabilirsin. Oyun içerisinde Patreon destekçisi sayılmak için
            destekçilere özel olan Discord rolünü alıp Discord hesabını
            bağladıktan sonra sağ üstten yenile.
          </Box>
        </Section>
      </Window.Content>
    </Window>
  );
};

const RefreshButton = () => {
  const { act, data } = useBackend<Data>();
  const { refresh } = data;

  return (
    <Button
      icon="sync"
      tooltip="Yenile"
      tooltipPosition="bottom"
      disabled={!refresh}
      onClick={() => act('refresh')}
    />
  );
};
