import { StateCreator, create } from 'zustand';
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware';

type AuthStore = {
    auth: {
        token: string | null;
    };
    setToken: (token: string) => void;
    logout: () => void
};

type LanguagePersist = (
    config: StateCreator<AuthStore>,
    options: PersistOptions<AuthStore>
) => StateCreator<AuthStore>;

export const useAuthStore = create<AuthStore, []>(
    (persist as LanguagePersist)(
        (set) => ({
            auth: {
                token: null
            },
            setToken: (token: string) => set(() => ({ auth: { token: token } })),
            logout: () => set(() => ({ auth: { token: null } }))
        }),
        {
            name: 'token',
            storage: createJSONStorage(() => localStorage)
        }
    )
);
