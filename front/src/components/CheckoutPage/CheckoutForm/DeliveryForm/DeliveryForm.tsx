'use client';

import { useCallback, useEffect, useState } from 'react';
import CustomSelect from '@components/components/CustomSelect/CustomSelect';
import Input from '@components/components/Input/Input';
import { AreaData, DeliveryFormProps, SelectOptions } from '@components/types';
import debounce from 'lodash/debounce';

import {
  fetchAreas,
  fetchAreasUkr,
  fetchCities,
  fetchCitiesUkr,
  fetchWarehouses,
  fetchWarehousesUkr,
} from '../api';
import RadioButtons from '../RadioButtons/RadioButtons';

import styles from './DeliveryForm.module.scss';

const DeliveryForm: React.FC<DeliveryFormProps> = ({ dict, formControl }) => {
  const {
    register,
    formState: { errors },
    setValue,
    trigger,
  } = formControl;

  const {
    delivery,
    deliveryOptions,
    paymentOptions,
    areaLabel,
    areaPlaceholder,
    cityLabel,
    cityPlaceholder,
    warehouseLabel,
    warehousePlaceholder,
    notesLabel,
    notesPlaceholder,
  } = dict;

  const [areas, setAreas] = useState<AreaData[]>([]);
  const [cities, setCities] = useState<AreaData[]>([]);
  const [warehouse, setWarehouse] = useState<AreaData[]>([]);

  const [selectedAreas, setSelectedAreas] = useState<SelectOptions | null>(
    null
  );
  const [selectedCity, setSelectedCity] = useState<SelectOptions | null>(null);
  const [selectedWarehouse, setSelectedWarehouse] =
    useState<SelectOptions | null>(null);
  
  const [isAreaSelectOpen, setIsAreaSelectOpen] = useState(false);

  const [isLoading, setIsLoading] = useState({
    area: false,
    city: false,
    warehouse: false,
  });
  const [orderNotes, setOrderNotes] = useState('');

  const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0]);
  const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0].split(' - ')[0]);

  const handleSelectDelivery = (value: string) => {
    setValue('delivery', value);
    trigger('delivery');
    setSelectedDelivery(value);
    setSelectedWarehouse(null);
    setWarehouse([]);
    setValue('postOfficeBranchNum', {
      ref: '',
      value: '',
      label: '',
    });
  };

  const handleSelectPayment = (value: string) => {
    const paymentValue = value.split(' - ')[0];

    setValue('payment', value);
    trigger('payment');
    setSelectedPayment(paymentValue);
  };

  const handleSelectArea = (value: SelectOptions) => {
    setCities([]);
    setWarehouse([]);
    setSelectedCity(null);
    setValue('deliveryCity', {
      ref: '',
      value: '',
      label: '',
    });
    setSelectedWarehouse(null);
    setValue('deliveryArea', value);
    trigger('deliveryArea');
    setSelectedAreas(value);
  };

  const handleSelectCity = debounce(async (value: SelectOptions) => {
    setSelectedWarehouse(null);
    setWarehouse([]);
    setValue('deliveryCity', value);
    trigger('deliveryCity');
    setSelectedCity(value);
  }, 300);

  const handleSelectWarehouse = (value: SelectOptions) => {
    setValue('postOfficeBranchNum', value);
    trigger('postOfficeBranchNum');
    setSelectedWarehouse(value);
  };

  const handleOrderNotesChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    setOrderNotes(newValue);
    setValue('notes', newValue);
  };

  const fetchData = useCallback(async () => {
    setIsLoading({ ...isLoading, area: true });
    const areasData = await (selectedDelivery === deliveryOptions[2]
      ? fetchAreasUkr()
      : fetchAreas());
    setIsLoading({ ...isLoading, area: false });

    if (areasData) {
      setAreas(areasData);
      setIsAreaSelectOpen(false);
    }
  }, [selectedDelivery, deliveryOptions]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchDataCity = async () => {
    if (selectedAreas && !selectedCity && cities.length === 0) {
      setIsLoading({ ...isLoading, city: true });
      const citiesData = await (selectedDelivery === deliveryOptions[2]
        ? fetchCitiesUkr(selectedAreas.ref)
        : fetchCities(selectedAreas.label));
      setIsLoading({ ...isLoading, city: false });

      if (citiesData) {
        setCities(citiesData);
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchDataWarehouse = async () => {
    if (selectedAreas && selectedCity && selectedDelivery) {
      setIsLoading({ ...isLoading, warehouse: true });
      setWarehouse([]);

      const warehouseData = await (selectedDelivery === deliveryOptions[2]
        ? fetchWarehousesUkr(selectedCity.ref)
        : fetchWarehouses(selectedDelivery, selectedCity.value));

      if (warehouseData) {
        setIsLoading({ ...isLoading, warehouse: false });
        setWarehouse(warehouseData);
      }
    }
  };

  useEffect(() => {
    fetchData();
    setValue('payment', selectedPayment);
  }, [fetchData]);

  useEffect(() => {
    if (selectedAreas && !selectedCity && cities.length === 0) {
      fetchDataCity();
    }

    fetchDataWarehouse();
  }, [cities, isAreaSelectOpen, selectedAreas, selectedCity, selectedDelivery]);

  useEffect(() => {
    if (
      (selectedDelivery === deliveryOptions[2] && areas.length === 25) ||
      (selectedDelivery !== deliveryOptions[2] && areas.length === 26)
    ) {
      fetchData();
      setSelectedAreas(null);
      setAreas([]);
      setSelectedCity(null);
      setCities([]);
    }
    setSelectedWarehouse(null);
    setWarehouse([]);
  }, [areas.length, deliveryOptions, fetchData, selectedDelivery]);

  const selectOptionsArea = areas.map(option =>
    selectedDelivery === deliveryOptions[2]
      ? {
          ref: option.REGION_ID,
          value: option.REGION_UA,
          label: option.REGION_UA,
        }
      : {
          ref: option.Ref,
          value: option.Description,
          label: option.Description,
        }
  );

  const selectOptionsCity = cities.map(option =>
    selectedDelivery === deliveryOptions[2]
      ? {
          ref: option.CITY_ID,
          value: option.CITY_UA,
          label: `${option.CITY_UA} (${option.DISTRICT_UA} район)`,
        }
      : {
          ref: option.Ref,
          value: option.Description,
          label: option.Description,
        }
  );

  const selectOptionsWarehouse = warehouse.map(option =>
    selectedDelivery === deliveryOptions[2]
      ? {
          ref: option.POSTOFFICE_ID,
          value: option.POSTOFFICE_UA,
          label: `${option.POSTOFFICE_UA} ${option.STREET_UA_VPZ ? `(${option.STREET_UA_VPZ})` : '' }`,
        }
      : {
          ref: option.Ref,
          value: option.Description,
          label: option.Description,
        }
  );

  return (
    <fieldset className={styles.form__group}>
      <legend className={styles.group__title}>{delivery}</legend>
      <RadioButtons
        options={deliveryOptions}
        {...register('delivery')}
        onChangeSelector={handleSelectDelivery}
        checkedSelector={selectedDelivery}
      />
      <div className={styles.contactInfo__wrapper}>
        <CustomSelect
          value={selectedAreas}
          required
          onMenuOpen={() => {
            setIsAreaSelectOpen(true);
          }}
          {...register('deliveryArea')}
          onChange={value => {
            handleSelectArea(value);
          }}
          options={selectOptionsArea}
          label={`${areaLabel} *`}
          placeholder={areaPlaceholder}
          isLoading={isLoading.area}
          errorMessage={errors?.deliveryArea?.message}
          error={errors.deliveryArea}
        />
        <CustomSelect
          value={selectedCity}
          required
          {...register('deliveryCity')}
          onChange={value => {
            handleSelectCity(value);
          }}
          options={selectOptionsCity}
          label={`${cityLabel} *`}
          placeholder={cityPlaceholder}
          isLoading={isLoading.city}
          errorMessage={errors.deliveryCity?.message}
          error={errors.deliveryCity}
        />
        <CustomSelect
          value={selectedWarehouse}
          required
          {...register('postOfficeBranchNum')}
          onChange={value => {
            handleSelectWarehouse(value);
          }}
          options={selectOptionsWarehouse}
          label={`${warehouseLabel} *`}
          placeholder={warehousePlaceholder}
          isLoading={isLoading.warehouse}
          errorMessage={errors.postOfficeBranchNum?.message}
          error={errors.postOfficeBranchNum}
          searchMode='general'
        />
      </div>
      <RadioButtons
        options={paymentOptions}
        {...register('payment')}
        onChangeSelector={handleSelectPayment}
        checkedSelector={selectedPayment}
      />
      <Input
        label={notesLabel}
        {...register('notes')}
        placeholder={notesPlaceholder}
        multiline
        value={orderNotes}
        onChange={event => handleOrderNotesChange(event)}
        height="218px"
        errorMessage={errors?.notes?.message}
        error={errors?.notes}
      />
    </fieldset>
  );
};

export default DeliveryForm;
