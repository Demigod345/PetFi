import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Pet } from "@/types";
import Image from "next/image";

interface PetForSaleCardProps {
	pet: Pet;
	onBuy: () => void;
	balance: number;
}

export function PetForSaleCard({ pet, onBuy, balance }: PetForSaleCardProps) {
	return (
		<motion.div
			className="bg-white p-4 rounded-lg shadow-md border border-indigo-100"
			whileHover={{ scale: 1.05 }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
		>
			<div className="flex items-center justify-between mb-2">
				<h4 className="font-semibold text-lg text-indigo-600">{pet.name}</h4>
				<Image
					src={pet.image || "/placeholder.svg"}
					alt={pet.name}
					width={50}
					height={50}
					className="rounded-full"
				/>
			</div>
			<p className="text-gray-600">Type: {pet.type}</p>
			<p className="text-gray-600">Level: {pet.level}</p>
			<div className="mt-2 space-y-1">
				<p className="text-gray-600">
					Strength:{" "}
					<span className="font-medium text-green-600">{pet.strength}</span>
				</p>
				<p className="text-gray-600">
					Intelligence:{" "}
					<span className="font-medium text-blue-600">{pet.intelligence}</span>
				</p>
			</div>
			<p className="text-lg font-semibold mt-2 mb-3">
				Price: {pet.price} Tokens
			</p>
			<Button
				className="w-full bg-indigo-500 hover:bg-indigo-600 text-white"
				onClick={onBuy}
				disabled={balance < pet.price}
			>
				{balance < pet.price ? "Not enough tokens" : "Buy Pet"}
			</Button>
		</motion.div>
	);
}
