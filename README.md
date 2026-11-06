# Geiru Protection LoRA (experimental)

**Geiru Protection LoRA** is a model-only LoRA loader for MiniMax H3 chains. It only runs while the [Geiru Context Suite](https://github.com/roycho87/geiru_context_suite)'s degradation protection is on, and never on the first shot. It was made for **Imagineer13**'s [H3 Anti-Burn LoRA](https://huggingface.co/Imagineer13/H3-Anti-Burn-LoRA) (`h3_antiburn_universal_v1`), which it downloads into `loras/antiburn` the first time it's needed if you don't have it.

It used to be part of the Geiru Context Suite. It's been moved here as an experiment.

## Why it's experimental

The early tests showed a colour improvement with the Anti-Burn LoRA, but later tests weren't able to replicate it. The suspected cause is double compression of one of the initial test's side-by-side videos during stitching.

In the later tests ([test 13, a still scene](https://github.com/roycho87/NerdNotes/blob/main/20261104/static_chair_lora_test.md), and [test 14, 50 clips of a moving beach scene](https://github.com/roycho87/NerdNotes/blob/main/20261105/beach_lora_strength_test.md)), with degradation protection on, no LoRA, 0.2, 0.4 and 0.6 showed no visible colour difference.

The LoRA itself works: tested on its own, without these nodes, it has been shown to have an impact on colour. What these tests couldn't show was any extra colour gain on top of the Geiru Context Suite's degradation protection. They did show it doesn't hurt fine detail: on the still scene, no strength softened the textures.

**Please try it and share what you find** in the [issues](https://github.com/roycho87/Geiru-Protection-LoRa-Experimental/issues). More testing is needed, especially on scenes that keep changing, with other speed LoRAs and at higher resolutions.

**What's next:** I plan to experiment with training a LoRA that would work with this concept.

## Install

Needs the [Geiru Context Suite](https://github.com/roycho87/geiru_context_suite) installed: this node reads the protection switch from Geiru Context's latent.

```
cd ComfyUI/custom_nodes
git clone https://github.com/roycho87/Geiru-Protection-LoRa-Experimental
```

The internal node name (`H3ClownProtectionLora`) is unchanged, so workflows made with the suite's version still load.

## Using it

**Wiring:** Geiru Context → **Geiru Protection LoRA** → Geiru Context Noise → (Geiru Anchoring) → Geiru Keystone → Geiru Late Lock → sampler. Plug the model and Geiru Context's latent through it.

| Input | What it does |
|---|---|
| `lora_name` | `Anti-Burn v1 (auto-download)` uses Imagineer13's H3 Anti-Burn LoRA, downloading it the first time it's needed. Or pick any other LoRA. |
| `strength` | 0.6 is Imagineer13's advice for the Anti-Burn LoRA. |
| `enabled` | Turns the node off on its own. |
| `first_shot` | The first shot of your run. The LoRA is never used on it. |
| `shot_number` | Optional. Connect your shot number (the same one Geiru Context uses). |

It passes the model straight through when: the node is off, Geiru Context's `degradation_protection` is off, it's the first shot, or Geiru Context held nothing.

## Example workflows

- `example_workflows/clown_in_imagination_land_example.json`: the suite's Noisy Clown example with Geiru Protection LoRA added between Geiru Context and Geiru Context Noise, loading the Anti-Burn LoRA at 0.6, with Context Noise at 1.
- `example_workflows/long_chain_plus_ctxnoise_and_antiburn_lora.json`: the same workflow with a plainer name.

## Credits

- **Imagineer13**: the [H3 Anti-Burn LoRA](https://huggingface.co/Imagineer13/H3-Anti-Burn-LoRA) (training code on [GitHub](https://github.com/TryingSomeStuff13/ai-toolkit/tree/h3-antiburn/extensions_built_in/diffusion_models/minimax_h3/antiburn)). Not included here; it's downloaded from his page.
- The rest of the credits are in the [Geiru Context Suite README](https://github.com/roycho87/geiru_context_suite#credits).

## License

GPL-3.0, the same as the Geiru Context Suite.
