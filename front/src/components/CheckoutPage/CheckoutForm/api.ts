import { AreaData, CityData } from '@components/types';

const ApiKeyNP = process.env.NOVAPOSHTA_KEY;

export const fetchAreas = async () => {
  try {
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: ApiKeyNP,
        modelName: 'Address',
        calledMethod: 'getSettlementAreas',
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      console.error('Помилка завантаження даних з API');
      return null;
    }
  } catch (error) {
    console.error('Помилка завантаження даних з API', error);
    return null;
  }
};

export const fetchCities = async (Label: string) => {
  try {
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: ApiKeyNP,
        modelName: 'Address',
        calledMethod: 'getCities',
      }),
    });

    if (response.ok) {
      const data = await response.json();

      const filteredCities = data.data.filter(
        (city: CityData) => city.AreaDescription === Label
      );
      return filteredCities;
    } else {
      console.error('Помилка завантаження даних з API');
      return null;
    }
  } catch (error) {
    console.error('Помилка завантаження даних з API', error);
    return null;
  }
};

const fetchWarehousesByTypeOfWarehouseRef = async (
  TypeOfWarehouseRef: string,
  CityName: string
) => {
  try {
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: ApiKeyNP,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName,
          TypeOfWarehouseRef,
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      console.error('Error fetching data from API');
      return null;
    }
  } catch (error) {
    console.error('Error fetching data from API', error);
    return null;
  }
};

export const fetchWarehouses = async (
  selectedDelivery: string,
  CityName: string
) => {
  const typeOfWarehouseRefs = [];
  if (
    selectedDelivery === 'Нова Пошта (Поштомат)' ||
    selectedDelivery === 'Nova Poshta (Parcel Locker)'
  ) {
    typeOfWarehouseRefs.push('95dc212d-479c-4ffb-a8ab-8c1b9073d0bc');
    typeOfWarehouseRefs.push('f9316480-5f2d-425d-bc2c-ac7cd29decf0');
  } else {
    // typeOfWarehouseRefs.push('6f8c7162-4b72-4b0a-88e5-906948c6a92f');
    typeOfWarehouseRefs.push('841339c7-591a-42e2-8233-7a0a00f0ed6f');
    typeOfWarehouseRefs.push('9a68df70-0267-42a8-bb5c-37f427e36ee4');
  }

  const allWarehouses = [];
  for (const TypeOfWarehouseRef of typeOfWarehouseRefs) {
    const warehouses = await fetchWarehousesByTypeOfWarehouseRef(
      TypeOfWarehouseRef,
      CityName
    );
    if (warehouses !== null) {
      allWarehouses.push(...warehouses);
    }
  }

  return allWarehouses;
};

export const fetchAreasUkr = async () => {
  try {
    const response = await fetch(`/api/checkout/areas`, {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Помилка завантаження даних з API');
      return null;
    }
  } catch (error) {
    console.error('Помилка завантаження даних з API', error);
    return null;
  }
};

export const fetchCitiesUkr = async (RegionId: string) => {
  try {
    const response = await fetch(`/api/checkout/cities?region_id=${RegionId}`, {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Помилка завантаження даних з API');
      return null;
    }
  } catch (error) {
    console.error('Помилка завантаження даних з API', error);
    return null;
  }
};

export const fetchWarehousesUkr = async (CityId: string) => {
  try {
    const response = await fetch(`/api/checkout/warehouses?city_id=${CityId}`, {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Помилка завантаження даних з API');
      return null;
    }
  } catch (error) {
    console.error('Помилка завантаження даних з API', error);
    return null;
  }
};
