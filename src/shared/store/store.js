import { persist, subscribeWithSelector } from "zustand/middleware";
import { createStore as create } from "zustand/vanilla";

/**
 * Функция для создания Store с уникальным именем
 * @param {string} storageName - Имя хранилища
 * @return {Function} - Функция, возвращающая Store
 */
export const createStore = (storageName) => {
  return create(
    subscribeWithSelector(
      persist(
        (set) => ({
          markers: [],
          activeFilters: {},
          setMarkers: (markers) => set({ markers }),
          addMarker: (marker) => {
            set((state) => {
              // Проверка, есть ли уже маркер с таким ID
              const exists = state.markers.some((m) => m?.id === marker.id);
              if (exists) {
                console.warn(`Marker with ID ${marker.id} already exists.`);
                return state; // Не изменяем состояние, если маркер с таким ID уже существует
              }
              return {
                markers: [...state.markers, marker], // Добавляем новый маркер
              };
            });
          },
          addMarkers: (newMarkers) => {
            set((state) => {
              // Для каждого маркера в списке проверяем, существует ли уже маркер с таким id
              const updatedMarkers = [...state.markers];
              newMarkers.forEach((marker) => {
                // Если маркер с таким id уже существует, обновляем его
                const markerIndex = updatedMarkers.findIndex(
                  (m) => m.id === marker.id
                );
                if (markerIndex !== -1) {
                  updatedMarkers[markerIndex] = {
                    ...updatedMarkers[markerIndex],
                    ...marker,
                  };
                } else {
                  // Если маркера нет, добавляем новый
                  updatedMarkers.push(marker);
                }
              });

              return { markers: updatedMarkers };
            });
          },
          removeMarker: (markerId) =>
            set((state) => ({
              markers: state.markers.filter((marker) => marker.id !== markerId),
            })),
          removeMarkers: (markersId) => {
            set((state) => ({
              markers: state.markers.filter(
                (marker) => !markersId.includes(marker.id)
              ),
            }));
          },
          setFilters: (filters) => set({ activeFilters: filters }),
          clearFilters: () => set({ activeFilters: {} }),
        }),
        {
          name: storageName, // Используем переданное имя хранилища
          getStorage: () => localStorage,
        }
      )
    )
  );
};
