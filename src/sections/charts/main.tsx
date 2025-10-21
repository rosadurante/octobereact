import { useEffect, useState } from "react";

import { usePokemons } from "./hooks";
import { type Pokemon, type TypesCounter } from "./types";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';

export const Charts = () => {
  const [types, setTypes] = useState<TypesCounter[]>([]);
  const { pokemons, loading, fetchPokemons } = usePokemons();

  const COLORS = ["#000", "#333", "#666", "#999", "#ccc"];

  useEffect(() => {
    fetchPokemons();
  }, []);

  const _addTypes = (pokemon: Pokemon) => {

    setTypes(prev => {
      const newTypes = [...prev];
      pokemon.types.forEach(t => {
        if (!newTypes.find(tc => tc.name === t as string)) {
          newTypes.push({ name: t as string, counter: 1 });
        } else {
          newTypes.find(tc => tc.name === t as string)!.counter++;
        }
      });
      return newTypes;
    });
  }

  useEffect(() => {
    if (!pokemons) return;
    pokemons.forEach((pokemon) => _addTypes(pokemon));
  }, [pokemons]);

  if (!pokemons || types.length === 0) {
    return <></>;
  }

  return loading ? <p>Loading...</p> : (
    <>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={types}
            dataKey="counter"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          >
            {types.map((type, index) => (
              <Cell key={`cell-${type.name}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={types}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="counter" fill="#222" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}