import { Song } from '@/types';
import usePlayer from './usePlayer';
import useAuthModal from './useAuthModal';

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
};
